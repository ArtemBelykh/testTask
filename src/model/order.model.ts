import { Model, DataTypes } from 'sequelize';
import {sequelize} from "../config/sequelize";
import {Table} from "sequelize-typescript";


@Table({ tableName: 'order' })
export class Order extends Model {
    public id!: number;
    public userId!: number;
    public status!: string;

    public static initialize() {
        this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'Order'
        });
    }
}

Order.initialize();