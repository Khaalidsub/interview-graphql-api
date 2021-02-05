import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Post } from './entities/post.entity';
@Injectable()
export class PostsService {
  private _URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpService: HttpService) {}
  findAll(): Promise<AxiosResponse<Post[]>> {
    return this.httpService.get(this._URL).toPromise();
  }

  findOne(id: number): Promise<AxiosResponse<Post>> {
    return this.httpService.get(`${this._URL}/${id}`).toPromise();
  }
}
