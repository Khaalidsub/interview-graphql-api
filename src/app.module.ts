import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [GraphQLModule.forRoot({}), PostsModule],
})
export class AppModule {}
