import { Categories } from 'src/Category/Category.entity';
import { usersTable } from 'src/Users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  task_title: string;
  @Column()
  task_desciption: string;
  @Column({ type: 'date', default: () => 'now()' })
  createdoN: string;
  @Column({ type: 'date', default: null })
  deadline: Date;
  @OneToOne(() => usersTable)
  @JoinColumn()
  user: usersTable;
  @OneToOne(() => Categories)
  @JoinColumn()
  Category: Categories;
}
