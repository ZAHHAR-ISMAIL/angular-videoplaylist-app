import { Author } from './author.model';

export class VideoReaction {
  id!: string;
  videoId!: string;
  postedDate!: string;
  timeframe!: number;
  type!: 'star' | 'snapshot';
  imageUrl?: string; // Only for 'snapshot' reactions
  author!: Author;
}
