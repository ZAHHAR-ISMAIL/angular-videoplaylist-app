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
import { ReactionButtonComponent } from './components/ui/buttons/reaction-button/reaction-button.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { VideoAuthorComponent } from './components/video-author/video-author.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { FormsModule } from '@angular/forms';
import { VideoReactionComponent } from './components/video-reaction/video-reaction.component';
import { CameraIconComponent } from './components/ui/icons/camera-icon/camera-icon.component';
import { StarIconComponent } from './components/ui/icons/star-icon/star-icon.component';
import { TimeframeFormatPipe } from './pipes/timeframe-format.pipe';

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
    VideoTitleComponent,
    VideoReactionComponent,
    CameraIconComponent,
    StarIconComponent,
    TimeframeFormatPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
