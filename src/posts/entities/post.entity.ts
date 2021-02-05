import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IPost } from '../../types';

@ObjectType()
export class Post implements IPost {
  @Field(() => Int, { description: 'Id of the User' })
  userId: number;
  @Field(() => Int, { description: 'Id of the Post' })
  id: number;
  @Field(() => String, { description: 'Title of the Post' })
  title: string;

  @Field(() => String, { description: 'Body of the Post' })
  body: string;
}
