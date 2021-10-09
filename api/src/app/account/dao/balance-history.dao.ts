import { TransferDao } from './transfer.dao';
import { AccountDao } from './account.dao';
import { SearchStrategy } from '../../shared/enums/search-strategy.enum';
import { UtilDaoService } from '../../shared/util-dao.service';
import { BalanceHistory } from '../models/balance-history';

export class BalanceHistoryDao {
  public static async addBalanceHistory(options: any): Promise<any> {
    return await UtilDaoService.add(options, BalanceHistory);
  }

  public static async findBalanceHistories(options = {}): Promise<any> {
    return await UtilDaoService.find(options, BalanceHistory);
  }

  public static async findBalanceHistoryById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, BalanceHistory);
  }

  public static async searchForBalanceHistory(options: any): Promise<any> {
    return await UtilDaoService.search(options, BalanceHistory);
  }

  public static async updateBalanceHistoryById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, BalanceHistory);
  }

  public static async deleteBalanceHistoryById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, BalanceHistory);
  }

  public static async deleteManyBalanceHistoriesBy(options: any): Promise<any> {
    return await UtilDaoService.delete(options, BalanceHistory);
  }

  public static async generateBalanceHistoryByAccountId(options: any): Promise<any> {
    const accountId = options.body.accountId;

    await this.deleteManyBalanceHistoriesBy({ accountId });
    const account = await AccountDao.getAccountByOneProperty({ _id: accountId });

    const listOfTransfers = await TransferDao.findTransfer({
      body: {
        accountFrom: accountId,
        accountTo: accountId,
        searchStrategy: SearchStrategy.MATCH_SOME,
        sort: '-date',
      },
    });

    const formattedList = listOfTransfers.map((transfer: any) => {
      const value = transfer.accountTo === accountId ? `-${parseFloat(transfer.value)}` : parseFloat(transfer.value);
      const valueInPln =
        transfer.accountTo === accountId ? `-${parseFloat(transfer.valueInPln)}` : parseFloat(transfer.valueInPln);
      return {
        ...transfer._doc,
        value,
        valueInPln,
      };
    });

    let startBalance = parseFloat(account[0].balance).toFixed(4);
    const balanceHistoryArray = [];

    for (const transfer of formattedList) {
      const newCurrentBalanceHistory = new BalanceHistory({
        balance: startBalance,
        date: transfer.date,
        accountId,
      });
      balanceHistoryArray.push(newCurrentBalanceHistory);

      startBalance = (parseFloat(startBalance) + parseFloat(transfer.value)).toFixed(4);
    }

    const newBalanceHistory = new BalanceHistory({
      balance: '0.0',
      date: account[0].dateOfCreate,
      accountId,
    });
    balanceHistoryArray.push(newBalanceHistory);

    return await BalanceHistory.insertMany(balanceHistoryArray);
  }
}
