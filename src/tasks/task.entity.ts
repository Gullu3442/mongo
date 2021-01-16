import { usersTable } from 'src/Users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tasks')
export class Tasks_Entity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  task_title: string;
  @Column()
  task_desciption: string;
  @Column({ default: new Date() })
  createdoN: Date;
  @Column({ default: null })
  deadline: Date;
  @OneToOne(() => usersTable)
  @JoinColumn()
  user: usersTable;
}
