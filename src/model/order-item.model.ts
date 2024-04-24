import { Model, DataTypes } from 'sequelize';
import { Book } from './book.model';
import {sequelize} from "../config/sequelize";
import {Table} from "sequelize-typescript";

@Table({ tableName: 'orderItem' })
export class OrderItem extends Model {
    public id!: number;
    public orderId!: number;
    public bookId!: number;
    public quantity!: number;

    public static initialize() {
        this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            orderId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            bookId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'OrderItem'
        });
    }

    public static associate() {
        this.belongsTo(Book);
    }
}

OrderItem.initialize();
OrderItem.associate();