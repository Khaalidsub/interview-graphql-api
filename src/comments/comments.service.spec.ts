import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CommentSearch } from 'src/types';
import { CommentsService } from './comments.service';
// import { Comment} from './'
describe('CommentsService', () => {
  let service: CommentsService;
  let comments: Comment[] = [];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsService],
      imports: [HttpModule],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
  });
  describe('findAll comments', () => {
    it('should return all comments', async () => {
      const response = await service.findAll();
      comments = response.data;
      expect(comments.length).toBeGreaterThan(1);
    });
  });
  describe('Search Comments', () => {
    it('should return comments based on postId', async () => {
      const [comment] = comments;
      const response = await service.findSearch(
        CommentSearch.postId,
        comment.postId,
      );

      expect(response.data).toEqual(comment);
    });
    it('should return  comments based on name', async () => {
      const [comment] = comments;
      const response = await service.findSearch(
        CommentSearch.name,
        comment.name,
      );

      expect(response.data).toEqual(comment);
    });
    it('should return comments based on comment id', async () => {
      const [comment] = comments;
      const response = await service.findSearch(CommentSearch.id, comment.id);

      expect(response.data).toEqual(comment);
    });
  });
});
