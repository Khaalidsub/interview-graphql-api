export interface IPost {
  userId: number;
  id: number;

  title: string;
  body: string;
}
export interface IComment {
  id: number;
  postId: number;
  name: number;
  email: string;
  body: string;
}
export interface IUser {}
