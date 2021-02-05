import { registerEnumType } from '@nestjs/graphql';

export interface IPost {
  userId: number;
  id: number;

  title: string;
  body: string;
}
export interface IComment {
  id: number;
  postId: number;
  name: number;
  email: string;
  body: string;
}

export enum CommentSearch {
  id = 'id',
  postId = 'postId',
  name = 'name',
  email = 'email',
  body = 'body',
}

registerEnumType(CommentSearch, {
  name: 'CommentSearch',
  description: 'Property Type of the comment to searched ',
});
