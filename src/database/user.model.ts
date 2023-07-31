import { Model, Column, HasMany, PrimaryKey, Table, Unique, AutoIncrement } from "sequelize-typescript";
import { Post } from "./post.model";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Unique
  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Post)
  posts: Post[];
}