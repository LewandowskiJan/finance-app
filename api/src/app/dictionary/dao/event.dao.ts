import { UtilDaoService } from './../../shared/util-dao.service';
import { Event } from '../models/event';

export class EventDao {
  public static async addEvent(options: any): Promise<any> {
    return await UtilDaoService.add(options, Event);
  }
  public static async findEvents(options: any): Promise<any> {
    return await UtilDaoService.find(options, Event);
  }
  public static async findEventById(options: any): Promise<any> {
    return await UtilDaoService.findById(options, Event);
  }
  public static async searchForEvent(options: any): Promise<any> {
    return await UtilDaoService.search(options, Event);
  }
  public static async updateEventById(options: any): Promise<any> {
    return await UtilDaoService.updateOne(options, Event);
  }
  public static async deleteEventById(options: any): Promise<any> {
    return await UtilDaoService.findByIdAndDelete(options, Event);
  }
}
