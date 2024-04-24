import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Book } from './book.model';

@Table({ tableName: 'orderItem' })
export class OrderItem extends Model<OrderItem> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Book)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    bookId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    orderId: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity: number;
}
