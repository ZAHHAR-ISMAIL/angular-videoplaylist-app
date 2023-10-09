import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';

const routes: Routes = [
  { path: 'videos', component: HomeComponent },
  { path: 'videos/:videoId', component: VideoDetailComponent },
  { path: '', redirectTo: '/videos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
