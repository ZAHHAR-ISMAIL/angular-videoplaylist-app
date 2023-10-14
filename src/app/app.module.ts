import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactionButtonComponent } from './components/buttons/reaction-button/reaction-button.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { VideoAuthorComponent } from './components/video-author/video-author.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoDetailComponent,
    VideoCardComponent,
    NavbarComponent,
    ProfileComponent,
    ReactionButtonComponent,
    LayoutComponent,
    VideoAuthorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
