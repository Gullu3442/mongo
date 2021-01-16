import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 


@Entity("Users")
export class usersTable
{
@PrimaryGeneratedColumn()
id: number
@Column()
User_Name:string
@Column()
User_Password:string
@Column()
Full_Name:string
@Column()
Email:string
@Column()
Created_On:Date

}
