import { Args, Context, Int, Query, Resolver } from '@nestjs/graphql';
import { CommentSearch, IDatasource } from '../types';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
@Resolver(() => Comment)
export class CommentsResolver {
  constructor() {}

  @Query(() => [Comment], { name: 'comments' })
  findAll(@Context('dataSources') { commentsAPI }: IDatasource) {
    return commentsAPI.findAll();
  }

  @Query(() => [Comment], { name: 'commentsBySearch' })
  findBySearch(
    @Args('CommentSearch', { type: () => CommentSearch }) search: CommentSearch,
    @Args('input') input: string,
    @Context('dataSources') { commentsAPI }: IDatasource,
  ) {
    return commentsAPI.findSearch(input, search);
  }
}
