import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publisher } from './publisher.entity';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Publisher)
    private publisherRepository: Repository<Publisher>,
  ) {}

  // get all publishers
  async findAll(): Promise<Publisher[]> {
    return await this.publisherRepository.find();
  }

  // get one publisher by id
  async findOne(id: number): Promise<Publisher | null> {
    return await this.publisherRepository.findOne({ where: { id } });
  }

  // create a new publisher
  async create(publisher: Publisher): Promise<Publisher> {
    const newPublisher = this.publisherRepository.create(publisher);
    return await this.publisherRepository.save(newPublisher);
  }

  // update a publisher
  async update(id: number, publisher: Publisher): Promise<Publisher | null> {
    await this.publisherRepository.update(id, publisher);
    return await this.publisherRepository.findOne({ where: { id } });
  }

  // delete a publisher
  async delete(id: number): Promise<void> {
    await this.publisherRepository.delete(id);
  }
}
