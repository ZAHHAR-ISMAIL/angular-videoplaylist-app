import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Video } from '../models/video.model';
import { VideoPreview } from '../models/video-preview.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = environment.apiUrl; // API endpoint

  constructor(private http: HttpClient) {}

  // Fetch the list of videos
  getVideos(): Observable<VideoPreview[]> {
    const url = `${this.apiUrl}/videos`;
    return this.http.get<VideoPreview[]>(url);
  }

  // Fetch video details by id
  getVideoDetails(videoId: string): Observable<Video> {
    const url = `${this.apiUrl}/videos/${videoId}`;
    return this.http.get<Video>(url);
  }

  // Update video title by videoId
  updateVideoTitle(videoId: string, newTitle: string): Observable<any> {
    const url = `${this.apiUrl}/videos/${videoId}`;
    const payload = { title: newTitle };
    return this.http.patch(url, payload);
  }
}
