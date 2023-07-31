import { Module } from '@nestjs/common';
import { DatabaseModule } from './connection/database.module';
import { UserModule } from './models/user/user.module';
import { PostModule } from './models/post/post.module';
import { TagModule } from './models/tag/tag.module';

@Module({
  imports: [DatabaseModule, UserModule, PostModule, TagModule],
})
export class AppModule {}
