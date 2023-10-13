import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/Services/route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isVideoDetailsPage: boolean = false;

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.routeService.getIsVideoDetailsPage().subscribe((value) => {
      this.isVideoDetailsPage = value;
      console.log(this.isVideoDetailsPage);

      // Modify the behavior of  NavbarComponent based on this value
    });
  }
}

// this.isVideoDetailsPage = this.router.url === '/video-details';
// console.log(this.isVideoDetailsPage);
