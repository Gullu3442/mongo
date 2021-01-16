import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Category_Name: string;
}
