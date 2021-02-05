import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  constructor(private httpService: HttpService) {}
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(id: number) {
    throw new Error('Method not implemented.');
  }
}
