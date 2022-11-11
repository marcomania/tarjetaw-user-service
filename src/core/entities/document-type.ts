import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity({ name: 'document_types' })
export class DocumentType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    abbreviation: string;

    @Column()
    state: boolean;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
    
    @BeforeInsert()
    beforeInsert() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedAt = new Date();
    }
}