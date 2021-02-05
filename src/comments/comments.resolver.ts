import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CommentSearch } from '../types';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
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
    @Args('input', { type: () => String || Int, nullable: true })
    input: string | number,
  ) {
    return this.commentsService.findSearch(query, input);
  }
}
