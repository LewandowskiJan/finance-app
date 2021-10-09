import { UtilDaoService } from './../../shared/util-dao.service';
import { Project } from '../models/project';

export class ProjectDao {
  public static async addProject(options: any): Promise<any> {
    return await UtilDaoService.add(options, Project);
  }

  public static async findProjects(options: any): Promise<any> {
    return await UtilDaoService.find(options, Project);
  }

  public static async findProjectById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, Project);
  }

  public static async searchForProject(options: any): Promise<any> {
    return await UtilDaoService.search(options, Project);
  }

  public static async updateProjectById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, Project);
  }

  public static async deleteProjectById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, Project);
  }
}
