import { Author } from './author.model';

export class Video {
  id!: string;
  title!: string;
  description!: string;
  createdDate!: string;
  url!: string;
  previewUrl!: string;
  author!: Author;
}
