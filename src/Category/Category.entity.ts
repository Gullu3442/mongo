import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  Category_Name: string;
}
