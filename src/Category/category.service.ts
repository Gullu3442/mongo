import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './Category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepo: Repository<Categories>,
  ) {}

  async createCategory(category) {
    try {
      return await this.categoriesRepo.save(category);
    } catch (e) {
      if (e.code == 'ER_DUP_ENTRY') {
        return { msg: 'Category Already Exists' };
      } else {
        return e;
      }
    }
  }
  getCategory() {
    return this.categoriesRepo.find();
  }
}
