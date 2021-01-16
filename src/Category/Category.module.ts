import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoty_Controller } from './Category.controller';
import { Categories } from './Category.entity';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  controllers: [Categoty_Controller],
  providers: [CategoryService],
})
export class Category_Module {}
