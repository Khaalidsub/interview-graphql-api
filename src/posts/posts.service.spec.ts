import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let posts: Post[] = [];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
      imports: [HttpModule],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });
  describe('findAll posts', () => {
    it('should return all posts', async () => {
      const response = await service.findAll();
      posts = response.data;
      expect(posts.length).toBeGreaterThan(1);
    });
  });
  describe('find one post', () => {
    it('should return a post', async () => {
      const [post] = posts;
      const response = await service.findOne(post.id);

      expect(response.data).toEqual(post);
    });
  });
});
