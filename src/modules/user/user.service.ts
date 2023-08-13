import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import { Model } from 'sequelize';

import { User } from 'src/db/models/user.model';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(createUserDto: UserDto) {
    try {
      const userData = await this.userModel.create(createUserDto);
      return userData;
    } catch (error) {
      if (error.original.code === '23505') {
        throw new HttpException(
          `email "${createUserDto.email}" already exist`,
          HttpStatus.CONFLICT,
        );
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
