import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("episodes")
export class Episodes {

    @PrimaryColumn()
    id: string;    

    @Column()
    title: string;

    @Column()
    members: string;

    @Column()
    published_at: string;

    @Column()
    thumbnail: string;

    @Column()
    description: string;

    @Column()
    fileurl: string;

    @Column()
    fileduration: number;

}