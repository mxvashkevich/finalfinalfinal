import { Model, Table, Column, ForeignKey } from "sequelize-typescript";
import { Post } from "./post.model";
import { Tag } from "./tag.model";

@Table
export class TagPost extends Model<TagPost> {
  @ForeignKey(() => Post)
  @Column
  postId: number;

  @ForeignKey(() => Tag)
  @Column
  tagName: string;
}