import { Module } from '@nestjs/common';
import { Categoty_Controller } from './Category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [],
  controllers: [Categoty_Controller],
  providers: [CategoryService],
})
export class Category_Module {}
