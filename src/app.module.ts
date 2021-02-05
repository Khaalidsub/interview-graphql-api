import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [PostsModule, CommentsModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PostsModule,
    CommentsModule,
  ],
})
export class AppModule {}
