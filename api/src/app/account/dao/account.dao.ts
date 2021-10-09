import { Request } from 'express';
import { Account } from '../models/account';
import { TransferSchema } from '../models/transfer';
import { UtilDaoService } from './../../shared/util-dao.service';

export class AccountDao {
  public static async updateAccountBalance(
    accountId: string,
    transferValue: number,
    transfer: TransferSchema
  ): Promise<any> {
    const account = await Account.findById(accountId);

    if (!account.isExternal && transferValue < 0 && parseFloat(account.balance) < -transferValue) {
      return null;
    }

    let balance;

    if (transfer.currency !== account.currency) {
      const value =
        transfer.currency === 'PLN'
          ? parseFloat((parseFloat(transferValue.toString()) / parseFloat(transfer.exchangeRate)).toString()).toFixed(4)
          : parseFloat((parseFloat(transferValue.toString()) * parseFloat(transfer.exchangeRate)).toString()).toFixed(
              4
            );

      balance = (parseFloat(account.balance) + parseFloat(value)).toFixed(4).toString();
    } else {
      balance = (parseFloat(account.balance) + parseFloat(transferValue.toString())).toFixed(4).toString();
    }

    await Account.updateOne(
      { _id: accountId },
      { $set: { balance: balance } },
      {
        new: true,
        runValidators: true,
        context: 'query',
      }
    );

    const response = { ...account, balance: balance };
    return response;
  }

  public static async updateAccount(request: Request): Promise<any> {
    // change balance only using transfer
    delete request.body.balance;
    return await UtilDaoService.updateOne(request, Account);
  }

  public static async getAllAccounts(options = {}): Promise<any> {
    return await UtilDaoService.find(options, Account);
  }

  public static async getAccountByOneProperty(options = {}): Promise<any> {
    return await UtilDaoService.findByOneProperty(options, Account);
  }

  public static async createAccount(options: any): Promise<any> {
    const newAccount = new Account({ ...options.body });
    const savedAccount = await newAccount.save();

    return { ...savedAccount };
  }

  public static async findAccountById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, Account);
  }

  public static async deleteAccountById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, Account);
  }

  public static async searchForAccount(options: any): Promise<any> {
    return await UtilDaoService.search(options, Account);
  }

  public static async resterAllAccountsBalance(): Promise<any> {
    return await Account.updateMany({}, { balance: '0', isExternal: true });
  }
}
