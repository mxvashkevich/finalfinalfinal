import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export const trim = (value: string): string => value.trim();
export class PostDto {
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  imageURL?: string;
}

export class CreatePostDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  imageURL?: string;
}
