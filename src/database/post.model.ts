import { Model, AutoIncrement, Table, BelongsTo, BelongsToMany, Column, ForeignKey, PrimaryKey } from "sequelize-typescript";
import { TagPost } from "./tag-post.model";
import { Tag } from "./tag.model";
import { User } from "./user.model";

@Table
export class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  
  @Column
  title: string;

  @Column
  content: string;

  @Column
  image: string;

  @BelongsToMany(() => Tag, () => TagPost)
  tags: Tag[];

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

}