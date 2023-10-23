import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/Services/route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isVideoDetailsPage: boolean = false;

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    // Check if the page is video details page
    this.routeService.getIsVideoDetailsPage().subscribe((value) => {
      this.isVideoDetailsPage = value;
    });
  }
}
