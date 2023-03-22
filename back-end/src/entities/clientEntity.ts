import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {hashSync} from 'bcryptjs'
import { Contact } from "./contactEntity";

@Entity("clients")
export class Client {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name : string;

    @Column({unique:true})
    email: string;

    @Column()
    telephone: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contact , contact => contact.clients)
    contacts: Contact[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password , 10)
    }
}