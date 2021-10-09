import { UtilDaoService } from './../../shared/util-dao.service';
import { Target } from '../models/target';

export class TargetDao {
  public static async addTarget(options: any): Promise<any> {
    return await UtilDaoService.add(options, Target);
  }

  public static async findTargets(options: any): Promise<any> {
    return await UtilDaoService.find(options, Target);
  }

  public static async findTargetById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, Target);
  }

  public static async searchForTarget(options: any): Promise<any> {
    return await UtilDaoService.search(options, Target);
  }

  public static async updateTargetById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, Target);
  }

  public static async deleteTargetById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, Target);
  }
}
