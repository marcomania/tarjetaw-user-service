import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BeforeInsert, BeforeUpdate, ManyToOne, } from 'typeorm';

@Entity({ name: 'user' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cell: string;

    @Column()
    advisorCode: string;

    @Column()
    dateOfBirth: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    secretQuestion: string;

    @Column()
    secretResponse: string;

    @Column()
    identifier: string;
}
