import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  id: number;
  @Prop()
  User_Name: string;
  @Prop()
  User_Password: string;
  @Prop()
  Full_Name: string;
  @Prop()
  Email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
