import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IPost } from '../../types';

@ObjectType()
export class Post implements IPost {
  @Field(() => Int, { description: 'Id of the User' })
  id: number;
  @Field(() => Int, { description: 'Id of the Post' })
  postId: number;
  @Field(() => String, { description: 'Name of the User' })
  name: string;
  @Field(() => String, { description: 'Email of the User' })
  email: string;
  @Field(() => String, { description: 'Body of the Post' })
  body: string;
}
