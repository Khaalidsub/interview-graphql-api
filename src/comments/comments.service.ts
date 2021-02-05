import { HttpService, Injectable } from '@nestjs/common';
import { CommentSearch } from 'src/types';
import { AxiosResponse } from 'axios';
import { Comment } from './entities/comment.entity';
@Injectable()
export class CommentsService {
  private _URL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpService: HttpService) {}
  findAll(): Promise<AxiosResponse<Comment[]>> {
    return this.httpService.get(this._URL).toPromise();
  }
  findSearch(
    query: CommentSearch,
    input: string | number,
  ): Promise<AxiosResponse<Comment[]>> {
    return this.httpService.get(`${this._URL}?${query}=${input}`).toPromise();
  }
}
