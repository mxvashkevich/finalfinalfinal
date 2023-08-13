import {
  Model,
  Column,
  PrimaryKey,
  Table,
  Unique,
  HasMany,
  AutoIncrement,
  BeforeCreate,
  AllowNull,
} from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

import { Post } from './post.model';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  avatar?: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @BeforeCreate
  static async hashPassword(instance: User) {
    const hashedPassword = await bcrypt.hash(
      instance.password,
      Number(process.env.SALT_ROUNDS),
    );
    instance.password = hashedPassword;
    instance.email = instance.email.trim().toLowerCase();
  }

  @HasMany(() => Post, { onDelete: 'CASCADE' })
  posts: Post[];

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
