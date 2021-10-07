import { Document, Model } from 'mongoose';
import { SearchStrategy } from './enums/search-strategy.enum';

export class UtilDaoService {
  public static async add<typeOfSchema>(
    options: any,
    DatabaseSchema: Model<typeOfSchema>
  ): Promise<Document<any, any, typeOfSchema>> {
    const newDatabaseObject = new DatabaseSchema({ ...options.body });
    return await newDatabaseObject.save();
  }

  public static async findByOneProperty<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    return await DatabaseSchema.find(options);
  }

  public static async find<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    if (!options.search) {
      return await DatabaseSchema.find().sort(options.sort).limit(options.limit);
    }

    const searchProperties = Object.keys(options.search).map((key) => {
      return { [key]: options.search[key] };
    });

    const searchOperation: any = {
      [SearchStrategy.MATCH_ALL]: { $and: searchProperties },
      [SearchStrategy.MATCH_SOME]: { $or: searchProperties },
    };

    return await DatabaseSchema.find(searchOperation[options.searchStrategy]).sort(options.sort).limit(options.limit);
  }

  public static async findById<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    return await DatabaseSchema.findOne({ _id: options.params.id });
  }

  public static async search<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    const searchProperties: any = Object.keys(options.query).map((key) => {
      return { [key]: { $regex: new RegExp(options.query[key], 'i') } };
    })[0];

    return await DatabaseSchema.find(searchProperties).limit(options.limit).exec();
  }

  public static async searchBy<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    const searchProperties: any = Object.keys(options.searchBy).map((key) => {
      return { [key]: { $regex: options.searchBy[key] } };
    });

    return await DatabaseSchema.find(searchProperties).limit(options.limit).exec();
  }

  public static async updateOne<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    return await DatabaseSchema.findOneAndUpdate({ _id: options.params.id }, options.body, {
      new: true,
      runValidators: true,
      context: 'query',
    });
  }

  public static async findByIdAndDelete<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    return await DatabaseSchema.findOneAndDelete({ _id: options.params.id });
  }

  public static async delete<typeOfSchema>(options: any, DatabaseSchema: Model<typeOfSchema>): Promise<any> {
    return await DatabaseSchema.deleteMany(options);
  }
}
