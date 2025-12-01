import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Render,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //Render
  @Get('/categories-list')
  @Render('categories-list')
  async viewAllCategories() {
    const categories = await this.categoryService.findAll();
    return { categories: categories };
  }

  //API
  //get all categories
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  //get one category by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Category | null> {
    const category = await this.categoryService.findOne(id);
    if (!category) {
      throw new Error('Category not found');
    } else {
      return category;
    }
  }
  //create a new category
  @Post()
  async create(@Body() category: Category): Promise<Category> {
    return await this.categoryService.create(category);
  }
  //update a category
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() category: Category,
  ): Promise<Category | null> {
    return await this.categoryService.update(id, category);
  }
  //delete a category
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const category = await this.categoryService.findOne(id);
    if (!category) {
      throw new Error('Category not found');
    } else {
      return await this.categoryService.delete(id);
    }
  }
}
