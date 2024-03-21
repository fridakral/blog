import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DecorGridComponent} from "./decor-grid/decor-grid.component";
import {SidenavComponent} from "./sidenav/sidenav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    DecorGridComponent,
    SidenavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  blogPosts: { title: string, tag: string, image: string }[][] = [];
  ngOnInit(): void {
    const chunkSize = 11;
    const totalPosts = 27;
    const chunks = [];

    for (let i = 0; i < totalPosts; i += chunkSize) {
      const chunk = [];
      const remainingPosts = totalPosts - i;
      const currentChunkSize = Math.min(remainingPosts, chunkSize);
      for (let j = 0; j < currentChunkSize; j++) {
        const postNumber = i + j + 1;
        chunk.push({
          title: `Blog Post ${postNumber}`,
          tag: 'Travelling',
          image: `/assets/images/decreased_resolution/${postNumber}.jpg`
        });
      }
      chunks.push(chunk);
    }

    this.blogPosts = chunks;
  }

}
