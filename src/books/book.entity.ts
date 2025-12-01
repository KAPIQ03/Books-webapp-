import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Publisher } from '../publisher/publisher.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Category, (category) => category.books)
  @JoinColumn({ name: 'category_idc' })
  category: Category;

  @ManyToOne(() => Publisher, (publisher) => publisher.books)
  @JoinColumn({ name: 'publisher_idp' })
  publisher: Publisher;

  // @Column()
  // category_idc: number;

  // @Column()
  // publisher_idp: number;
}
