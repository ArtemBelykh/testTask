import { Model, DataTypes } from 'sequelize';
import { Author } from './author.model';
import {sequelize} from "../config/sequelize";
import {Table} from "sequelize-typescript";

@Table({ tableName: 'book' })
export class Book extends Model {
    public id!: number;
    public title!: string;
    public authorId!: number;

    public static initialize() {
        this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            authorId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'Book'
        });
    }

    public static associate() {
        this.belongsTo(Author);
    }
}

Book.initialize();
Book.associate();