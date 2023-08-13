import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(
    @Body()
    CreateUserDto: UserDto,
  ) {
    return await this.userService.createUser(CreateUserDto);
  }
}
