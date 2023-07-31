import { Table, BelongsToMany, Column, Model, PrimaryKey, Unique } from "sequelize-typescript";
import { TagPost } from "./tag-post.model";
import { Post } from "./post.model";

@Table
export class Tag extends Model<Tag> {
  @PrimaryKey
  @Unique
  @Column
  name: string;

  @BelongsToMany(() => Post, () => TagPost)
  posts: Post[];
}