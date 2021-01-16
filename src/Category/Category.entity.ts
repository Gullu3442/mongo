import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Category')
export class Category_Entity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Category_Name: string;
}
