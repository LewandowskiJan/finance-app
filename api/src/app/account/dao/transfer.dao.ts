import { SearchStrategy } from '../../shared/enums/search-strategy.enum';
import { OperationErrorStatus } from '../../shared/error-handler/models/operation-error-status.enum';
import { Transfer } from '../models/transfer';
import { UtilDaoService } from './../../shared/util-dao.service';
import { AccountDao } from './account.dao';
import { TransferLineDao } from './transfer-line.dao';

export class TransferDao {
  public static async addTransfer(transfer: any): Promise<any> {
    let valueInPln: string;
    const newTransfer = new Transfer({
      value: transfer.value,
      accountFrom: transfer.accountFrom,
      accountTo: transfer.accountTo,
      currency: transfer.currency,
      date: new Date(transfer.date),
    });

    if (transfer.exchangeRate) {
      newTransfer.exchangeRate = transfer.exchangeRate;
      valueInPln = TransferDao.calculateValue(transfer.value, transfer.exchangeRate).toString();
    } else {
      valueInPln = transfer.value;
    }

    const transferLines = await TransferLineDao.addTransferLines(transfer, newTransfer._id);

    newTransfer.valueInPln = valueInPln;
    newTransfer.transferLineIds = transferLines;

    const updatedAccountFrom = await AccountDao.updateAccountBalance(
      transfer.accountFrom,
      parseFloat(`-${transfer.value}`),
      transfer
    );

    if (!updatedAccountFrom) {
      throw new Error(OperationErrorStatus.LACK_OF_FOUNDS_ERROR);
    }

    await AccountDao.updateAccountBalance(transfer.accountTo, transfer.value, transfer);

    const savedTransfer = await newTransfer.save();
    return savedTransfer;
  }

  public static async addTransfers(transfers: any[]): Promise<any> {
    const addedTransfers: any[] = [];

    for (const transfer of transfers) {
      const currentTransfer = await TransferDao.addTransfer(transfer);
      addedTransfers.push(currentTransfer);
    }

    return addedTransfers;
  }

  public static async findTransfer(options: any): Promise<any> {
    return await UtilDaoService.find(options, Transfer);
  }

  public static async findAllTransfers(options: any): Promise<any> {
    try {
      const transfers = await UtilDaoService.find(options, Transfer);

      const searchQuery = {
        search: {
          transferId: transfers.map((transfer: any) => transfer._id.toString()),
        },
        searchStrategy: SearchStrategy.MATCH_SOME,
      };

      const transferLines = await TransferLineDao.findByPropertiesTransferLines(searchQuery);
      return transfers.map((transfer: any) => {
        return {
          ...transfer._doc,
          transferLines: transferLines.filter((tl: any) => tl.transferId === transfer._id.toString()),
        };
      });
    } catch (error) {
      throw Error(error);
    }
  }

  public async updateTransfer(options: any): Promise<any> {
    const updatedTransfer = await UtilDaoService.findById(options, Transfer);
    let valueInPln: string;

    const transfer: any = options.body;
    const newTransfer: any = { ...options.body };
    const { value, exchangeRate } = transfer;

    if (value || exchangeRate) {
      updatedTransfer.exchangeRate = options.body.exchangeRate;
      valueInPln = (parseFloat(value) * parseFloat(exchangeRate)).toFixed(4).toString();
    }

    await TransferLineDao.deleteTransferLines(options.body._id);
    const transferLines = await TransferLineDao.addTransferLines(transfer, newTransfer._id);

    newTransfer.valueInPln = valueInPln;
    newTransfer.transferLineIds = transferLines;

    const res1 = await AccountDao.updateAccountBalance(transfer.accountFrom, parseFloat(`-${valueInPln}`), transfer);
    if (res1) {
      const res2 = await AccountDao.updateAccountBalance(transfer.accountTo, parseFloat(valueInPln), transfer);

      updatedTransfer.balanceHistoryIdFrom = res1;
      updatedTransfer.balanceHistoryIdTo = res2;

      await newTransfer.save();
      return newTransfer;
    } else {
      return { msg: 'too less money' };
    }
  }

  public static calculateValue(value: string, exchangeRate: string): string {
    return (parseFloat(value) * parseFloat(exchangeRate)).toFixed(4);
  }
}
