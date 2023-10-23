import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';
import { LayoutComponent } from './layouts/layout/layout.component';

const routes: Routes = [
  {
    path: 'videos',
    component: LayoutComponent, // This Layout component includes the NavbarComponent
    children: [
      { path: '', component: HomeComponent }, // Default video list component
      { path: ':videoId', component: VideoDetailComponent }, // Video detail component
    ],
  },
  { path: '', redirectTo: '/videos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
