import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BlogPageComponent} from "./blog-page/blog-page.component";

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'blog/:id/:title',
    component: BlogPageComponent,
    title: 'Blog Page'
  }
];
