import { IsNotEmpty, IsArray, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty() // This means title cannot be empty
  readonly title: string;

  @IsNotEmpty() // This means description cannot be empty
  readonly description: string;

  @IsNotEmpty() // This means body cannot be empty
  readonly body: string;

  @IsArray() // This means tagList must be an array
  @IsString({ each: true }) // This means each item in tagList must be a string
  readonly tagList: string[]; // This is where we define tagList as an array of strings
}
