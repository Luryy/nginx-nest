import { Controller, Get, Post } from '@nestjs/common';
import { AppDocument } from './app.schema';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): Promise<AppDocument[]> {
    return this.appService.getAll();
  }

  @Post()
  create(): Promise<AppDocument> {
    return this.appService.create();
  }
}
