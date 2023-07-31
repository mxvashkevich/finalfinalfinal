import { Sequelize } from "sequelize-typescript";
import { Post } from "src/database/post.model";
import { TagPost } from "src/database/tag-post.model";
import { Tag } from "src/database/tag.model";
import { User } from "src/database/user.model";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'maksim',
      });
      sequelize.addModels([Tag, Post, User, TagPost])
      await sequelize.sync();
      return sequelize;
    },
  },
];