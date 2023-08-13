import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from 'src/db/models/post.model';
import { Tag } from 'src/db/models/tag.model';
import { CreatePostDto } from 'src/dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post)
    private readonly postModel: typeof Post,
  ) {}

  async createPost(createPostDto: CreatePostDto) {
    try {
      const postData = await this.postModel.create(createPostDto);
      console.log(postData);
      return postData;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getAllPosts() {
    return await this.postModel.findAll({
      include: Tag,
      order: [['id', 'ASC']],
    });
  }
}
