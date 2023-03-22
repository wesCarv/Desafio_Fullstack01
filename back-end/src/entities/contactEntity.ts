import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clientEntity";

@Entity("contacts")
export class Contact {

    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column()
    name : string

    @Column({unique:true})
    email: string

    @Column()
    telephone: string

    @CreateDateColumn()
    registeredAt: Date

    @ManyToOne(() => Client , clients => clients.contacts)
    clients: Client
}