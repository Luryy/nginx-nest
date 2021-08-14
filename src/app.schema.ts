import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppDocument = App & Document;

@Schema()
export class App {
  @Prop()
  name: string;

  @Prop()
  version: number;
}

export const AppSchema = SchemaFactory.createForClass(App);
