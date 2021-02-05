import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IComment } from 'src/types';

@ObjectType()
export class Comment implements IComment {
  @Field(() => Int, { description: 'Comment Id' })
  id: number;
  @Field(() => Int, { description: ' Post Id' })
  postId: number;
  @Field(() => String, { description: 'User Name of the Commenter' })
  name: string;
  @Field(() => String, { description: 'Email of the Commenter' })
  email: string;
  @Field(() => String, { description: 'Text of the Comment' })
  body: string;
}