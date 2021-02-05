import { HttpService, Injectable } from '@nestjs/common';
import { CommentSearch } from 'src/types';
import { AxiosResponse } from 'axios';
import { Comment } from './entities/comment.entity';
import { RESTDataSource } from 'apollo-datasource-rest';
@Injectable()
export class CommentsService extends RESTDataSource {
  private _URL = 'https://jsonplaceholder.typicode.com/comments';

  constructor() {
    super();
    this.baseURL = this._URL;
  }
  async findAll() {
    const result = await this.get<Comment[]>('/');
    return result;
  }
  async findSearch(input: string, search: CommentSearch) {
    const result = await this.get<Comment[]>(`/`, {
      [search]: input,
    });
    return result;
  }
}
