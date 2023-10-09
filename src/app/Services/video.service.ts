import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Fetch the list of videos
  getVideos(): Observable<any[]> {
    const url = `${this.apiUrl}/videos`;
    return this.http.get<any[]>(url);
  }

  // Fetch video details by videoId
  getVideoDetails(videoId: string): Observable<any> {
    const url = `${this.apiUrl}/videos/${videoId}`;
    return this.http.get<any>(url);
  }

  // Update video title by videoId
  updateVideoTitle(videoId: string, newTitle: string): Observable<any> {
    const url = `${this.apiUrl}/videos/${videoId}`;
    const payload = { title: newTitle };
    return this.http.patch(url, payload);
  }
}
