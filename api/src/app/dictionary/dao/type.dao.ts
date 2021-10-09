import { UtilDaoService } from './../../shared/util-dao.service';
import { Type } from '../models/type';

export class TypeDao {
  public static async addType(options: any): Promise<any> {
    return await UtilDaoService.add(options, Type);
  }

  public static async findTypes(options: any): Promise<any> {
    return await UtilDaoService.find(options, Type);
  }

  public static async findTypeById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, Type);
  }

  public static async searchForType(options: any): Promise<any> {
    return await UtilDaoService.search(options, Type);
  }

  public static async updateTypeById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, Type);
  }

  public static async deleteTypeById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, Type);
  }
}
