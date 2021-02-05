import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Post } from './entities/post.entity';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let posts: Post[];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsResolver, PostsService],
      imports: [HttpModule],
    }).compile();

    resolver = module.get<PostsResolver>(PostsResolver);
  });

  describe('find all posts', () => {
    it('should return all posts', async () => {
      const response = await resolver.findAll();
      posts = response.data;
      expect(posts.length).toBeGreaterThan(1);
    });
  });
  describe('find one post', () => {
    it('should return a post', async () => {
      const [post] = posts;
      const response = await resolver.findOne(post.id);
      expect(response.data).toEqual(post);
    });
  });
});
