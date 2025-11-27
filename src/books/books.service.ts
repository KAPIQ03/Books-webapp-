import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}
  //get all books
  async findAll(): Promise<Book[]> {
    return await this.booksRepository.find();
  }
  // get one book by id
  async findOne(id: number): Promise<Book | null> {
    return await this.booksRepository.findOne({ where: { id } });
  }

  // create a new book
  async create(book: Book): Promise<Book> {
    const newBook = this.booksRepository.create(book);
    return await this.booksRepository.save(newBook);
  }

  // update a book
  async update(id: number, book: Book): Promise<Book | null> {
    await this.booksRepository.update(id, book);
    return await this.booksRepository.findOne({ where: { id } });
  }

  // delete a book
  async delete(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
