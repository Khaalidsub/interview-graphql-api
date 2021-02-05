import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CommentSearch } from '../types';
import { CommentsResolver } from './comments.resolver';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
describe('CommentsResolver', () => {
  let resolver: CommentsResolver;
  let comments: Comment[] = [];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsResolver, CommentsService],
      imports: [HttpModule],
    }).compile();

    resolver = module.get<CommentsResolver>(CommentsResolver);
  });
  describe('findAll comments', () => {
    it('should return all comments', async () => {
      const response = await resolver.findAll();
      comments = response.data;
      expect(comments.length).toBeGreaterThan(1);
    });
  });
  describe('Search Comments', () => {
    it('should return comments based on postId', async () => {
      const [comment] = comments;
      const response = await resolver.findBySearch(
        CommentSearch.postId,
        comment.postId,
      );

      expect(response.data.length).toBeGreaterThanOrEqual(1);
    });
    it('should return  comments based on name', async () => {
      const [comment] = comments;
      const response = await resolver.findBySearch(
        CommentSearch.name,
        comment.name,
      );

      expect(response.data.length).toBeGreaterThanOrEqual(1);
    });
    it('should return comments based on comment id', async () => {
      const [comment] = comments;
      const response = await resolver.findBySearch(
        CommentSearch.id,
        comment.id,
      );

      expect(response.data.length).toBeGreaterThanOrEqual(1);
    });
  });
});
