import { UtilDaoService } from '../../shared/util-dao.service';
import { ExpensesGroup } from '../models/expenses-group';

export class ExpensesGroupDao {
  public static async addExpensesGroup(options: any): Promise<any> {
    return await UtilDaoService.add(options, ExpensesGroup);
  }

  public static async findExpensesGroups(options: any): Promise<any> {
    return await UtilDaoService.find(options, ExpensesGroup);
  }

  public static async findExpensesGroupById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, ExpensesGroup);
  }

  public static async searchForExpensesGroup(options: any): Promise<any> {
    return await UtilDaoService.search(options, ExpensesGroup);
  }

  public static async updateExpensesGroupById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, ExpensesGroup);
  }

  public static async deleteExpensesGroupById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, ExpensesGroup);
  }
}
