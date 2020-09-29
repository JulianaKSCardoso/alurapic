export interface Photo {
  id:number;
  postDate: Date;
  url: string;
  description: string;
  allowComents: boolean;
  likes: number;
  userId: number;
}
