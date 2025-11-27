import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  // get all books
  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  // get book by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Book | null> {
    const book = await this.bookService.findOne(id);
    if (!book) {
      throw new Error('Book not found');
    } else {
      return book;
    }
  }
  // create a new book
  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return await this.bookService.create(book);
  }

  // update a book
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() book: Book,
  ): Promise<Book | null> {
    return await this.bookService.update(id, book);
  }

  // delete a book
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const book = await this.bookService.findOne(id);
    if (!book) {
      throw new Error('Book not found');
    } else {
      return await this.bookService.delete(id);
    }
  }
}
