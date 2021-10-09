import { UtilDaoService } from './../../shared/util-dao.service';
import { Category } from '../models/category';

export class CategoryDao {
  public static async addCategory(options: any): Promise<any> {
    if (!options.body.utfIcon) {
      options.body.utfIcon = '&#128176;';
    }
    return await UtilDaoService.add(options, Category);
  }

  public static async findCategories(options: any): Promise<any> {
    return await UtilDaoService.find(options, Category);
  }

  public static async findCategoryById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, Category);
  }

  public static async searchForCategory(options: any): Promise<any> {
    return await UtilDaoService.search(options, Category);
  }

  public static async updateCategoryById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, Category);
  }

  public static async deleteCategoryById(options: any) {
    return await UtilDaoService.findByIdAndDelete(options, Category);
  }
}
