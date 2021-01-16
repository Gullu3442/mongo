import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class usersTable {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  User_Name: string;
  @Column()
  User_Password: string;
  @Column()
  Full_Name: string;
  @Column()
  Email: string;
  @Column({ type: 'date', default: () => 'now()' })
  Created_On: string;
}
