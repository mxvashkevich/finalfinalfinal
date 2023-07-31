import { Module, Post } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TagPost } from 'src/database/tag-post.model';
import { Tag } from 'src/database/tag.model';

@Module({
  // imports: [SequelizeModule.forFeature([Post, Tag, TagPost])],
  // exports: [SequelizeModule],
})
export class TagModule {}
