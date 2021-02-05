import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IComment } from 'src/types';

@ObjectType()
export class Comment implements IComment {
  @Field(() => Int, { description: 'Comment Id' })
  id: number;
  @Field(() => Int, { description: ' Post Id' })
  postId: number;
  @Field(() => Int, { description: 'User Name of the Commenter' })
  name: number;
  @Field(() => String, { description: 'Email of the Commenter' })
  email: string;
  @Field(() => String, { description: 'Text of the Comment' })
  body: string;
}
