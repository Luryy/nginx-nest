import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App, AppDocument } from './app.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(App.name) private appModel: Model<AppDocument>) {}

  getAll(): Promise<AppDocument[]> {
    return this.appModel.find().exec();
  }

  create(): Promise<AppDocument> {
    const createdApp = new this.appModel({
      name: 'name' + Date.now().toString(),
      version: 1,
    });
    return createdApp.save();
  }
}
