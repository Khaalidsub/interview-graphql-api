import { HttpModule, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [HttpModule],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
