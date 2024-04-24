import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import {User} from "./user.model";

@Table
export class Order extends Model {
    @Column
    status: string;

    @ForeignKey(() => User)
    @Column
    userId: number;
}
