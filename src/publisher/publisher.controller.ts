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
import { PublisherService } from './publisher.service';
import { Publisher } from './publisher.entity';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  //Render
  @Get('/publishers-list')
  @Render('publishers-list')
  async viewAllPublishers() {
    const publishers = await this.publisherService.findAll();
    return { publishers: publishers };
  }

  //API
  //get all publishers
  @Get()
  async findAll(): Promise<Publisher[]> {
    return this.publisherService.findAll();
  }

  //get one publisher by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Publisher | null> {
    const publisher = await this.publisherService.findOne(id);
    if (!publisher) {
      throw new Error('Publisher not found');
    } else {
      return publisher;
    }
  }
  //create a new publisher
  @Post()
  async create(@Body() publisher: Publisher): Promise<Publisher> {
    return await this.publisherService.create(publisher);
  }
  //update a publisher
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() publisher: Publisher,
  ): Promise<Publisher | null> {
    return await this.publisherService.update(id, publisher);
  }
  //delete a publisher
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const publisher = await this.publisherService.findOne(id);
    if (!publisher) {
      throw new Error('Publisher not found');
    } else {
      return await this.publisherService.delete(id);
    }
  }
}
