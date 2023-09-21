import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum FlowType {
    LISTO = 1,
    MANUAL = 2,
    EXPRESS = 3,
    STOCK = 4,
    CUBO = 5,
}

@Entity()
export class Response {
    @Column('varchar', { length: 255 })
    statusMessage: string;

    @Column('int')
    statusCode: number;

    @Column({
        type: "enum",
        enum: FlowType,
    })
    flow: FlowType;

    @Column('timestamp')
    lastVDD: Date; // UTC date time

    @Column('int')
    weekVDD: number;

    @Column('varchar', { length: 255 })
    position: string;
}