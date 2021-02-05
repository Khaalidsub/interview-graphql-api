export interface IPost {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface IComment {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IUser {}
