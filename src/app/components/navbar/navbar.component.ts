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
    // Check if the page is video detals page
    this.routeService.getIsVideoDetailsPage().subscribe((value) => {
      this.isVideoDetailsPage = value;
      console.log(this.isVideoDetailsPage);
    });
  }
}
