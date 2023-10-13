import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private isVideoDetailsPage = new BehaviorSubject<boolean>(false);

  setIsVideoDetailPage(value: boolean) {
    this.isVideoDetailsPage.next(value);
  }

  getIsVideoDetailsPage(): Observable<boolean> {
    return this.isVideoDetailsPage.asObservable();
  }
}

// ngOnInit() {
//   this.routeService.getCurrentRoute().subscribe((route) => {
//     this.currentRoute = route;
//   });
// }
