import { Resolver, Query, Args, Int, Context } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { IDatasource } from 'src/types';
@Resolver(() => Post)
export class PostsResolver {
  constructor() {}

  @Query(() => [Post], { name: 'posts' })
  findAll(@Context('dataSources') { postsAPI }: IDatasource) {
    return postsAPI.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
    @Context('dataSources') { postsAPI }: IDatasource,
  ) {
    return postsAPI.findOne(id);
  }
}
