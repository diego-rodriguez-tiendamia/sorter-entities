import { Entity, Column } from 'typeorm';

@Entity()
export class Package {
    @Column('text', { array: true })
    trackings: string[];

    @Column('float', { nullable: true })
    weight?: number;

    @Column('float', { nullable: true })
    width?: number;

    @Column('float', { nullable: true })
    length?: number;

    @Column('float', { nullable: true })
    height?: number;
}