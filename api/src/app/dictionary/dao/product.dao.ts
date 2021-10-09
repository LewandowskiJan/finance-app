import { UtilDaoService } from './../../shared/util-dao.service';
import { Product } from '../models/product';

export class ProductDao {
  public static async addProduct(options: any): Promise<any> {
    return await UtilDaoService.add(options, Product);
  }

  public static async findProducts(options: any): Promise<any> {
    return await UtilDaoService.find(options, Product);
  }

  public static async findProductById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, Product);
  }

  public static async searchForProduct(options: any): Promise<any> {
    return await UtilDaoService.search(options, Product);
  }

  public static async updateProductById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, Product);
  }

  public static async deleteProductById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, Product);
  }
}
