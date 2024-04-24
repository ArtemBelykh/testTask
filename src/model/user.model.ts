import { Model, DataTypes } from 'sequelize';
import {sequelize} from "../config/sequelize";
import {Table} from "sequelize-typescript";

@Table({ tableName: 'users' })
export class User extends Model {
    public id!: number;
    public name!: string;

    public static initialize() {
        this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'User'
        });
    }
}

User.initialize();