import { UtilDaoService } from '../../shared/util-dao.service';
import { TransferLine } from '../models/transferLine';

export class TransferLineDao {
  public static async addTransferLines(transfer: any, id: any): Promise<any> {
    const transferLines = [];
    for (const line of transfer.transferLines) {
      const valueInPln = parseFloat(line.value) * parseFloat(transfer.exchangeRate);
      const addedTransferLine = await this.addTransferLine({
        body: { ...line, transferId: id, exchangeRate: transfer.exchangeRate, valueInPln: valueInPln.toFixed(4) },
      });
      transferLines.push(addedTransferLine._id);
    }

    return transferLines;
  }

  public static async addTransferLine(options: any): Promise<any> {
    return await UtilDaoService.add(options, TransferLine);
  }

  public static async findByPropertiesTransferLines(options: any): Promise<any> {
    return await UtilDaoService.find(options, TransferLine);
  }

  public static async deleteTransferLines(id: any): Promise<any> {
    return await UtilDaoService.delete({ transferId: id }, TransferLine);
  }
}
