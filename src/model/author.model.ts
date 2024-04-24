import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'author' })
export class Author extends Model<Author> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
}
