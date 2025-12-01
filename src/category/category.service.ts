import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  // get all categories
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  // get one category by id
  async findOne(id: number): Promise<Category | null> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  // create a new category
  async create(category: Category): Promise<Category> {
    const newCategory = this.categoryRepository.create(category);
    return await this.categoryRepository.save(newCategory);
  }

  // update a category
  async update(id: number, category: Category): Promise<Category | null> {
    await this.categoryRepository.update(id, category);
    return await this.categoryRepository.findOne({ where: { id } });
  }

  // delete a category
  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
