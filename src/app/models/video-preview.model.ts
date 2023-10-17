import { Author } from './author.model';

export class VideoPreview {
  id!: string;
  title!: string;
  createdDate!: string;
  previewUrl!: string;
  author!: Author;
}
