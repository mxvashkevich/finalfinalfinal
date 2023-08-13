import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, PostDto } from 'src/dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(
    @Body()
    createPostDto: CreatePostDto,
  ) {
    return this.postService.createPost(createPostDto);
  }

  @Get()
  getAll() {
    return this.postService.getAllPosts();
  }
}
