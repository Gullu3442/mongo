import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class Categoty_Controller {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  createCategory(@Body() body) {
    return this.categoryService.createCategory(body);
  }

  @Get()
  getCategories() {
    return this.categoryService.getCategory();
  }
}
