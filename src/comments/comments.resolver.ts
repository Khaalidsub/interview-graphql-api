import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CommentSearch } from 'src/types';
import { CommentsService } from './comments.service';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Query(() => [Comment], { name: 'comments' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Query(() => Comment, { name: 'commentsBySearch' })
  findBySearch(
    @Args('property', { type: () => CommentSearch }) query: CommentSearch,
    @Args('input', { type: () => String }) input: string,
  ) {
    return this.commentsService.findSearch(query, input);
  }
}
