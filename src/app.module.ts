import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [PostsModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PostsModule,
  ],
})
export class AppModule {}
