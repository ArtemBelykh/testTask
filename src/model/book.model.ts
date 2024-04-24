import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Author } from './author.model';

@Table({ tableName: 'book' })
export class Book extends Model<Book> {
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
    title: string;

    @ForeignKey(() => Author)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    authorId: number;
}
