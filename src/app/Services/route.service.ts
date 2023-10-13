import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  // Value to store if the cuurent page is video details page
  private isVideoDetailsPage = new BehaviorSubject<boolean>(false);

  setIsVideoDetailPage(value: boolean) {
    this.isVideoDetailsPage.next(value);
  }

  getIsVideoDetailsPage(): Observable<boolean> {
    return this.isVideoDetailsPage.asObservable();
  }
}
