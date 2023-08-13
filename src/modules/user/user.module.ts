import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from '../../db/models/user.model';
import { Post } from '../../db/models/post.model';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User, Post])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
