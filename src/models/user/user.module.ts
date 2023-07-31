import { Module, Post } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/database/user.model';

@Module({
  // imports: [SequelizeModule.forFeature([User, Post])],
  // exports: [SequelizeModule],
})
export class UserModule {}
