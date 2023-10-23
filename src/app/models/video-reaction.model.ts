import { Author } from './author.model';

export class VideoReaction {
  id!: string;
  videoId!: string;
  timeframe!: number;
  type!: 'star' | 'snapshot';
  createdDate?: string; // date time for snapshot
  postedDate!: string; // date time for star
  imageUrl?: string; // Only for 'snapshot' reactions
  author!: Author;
}
