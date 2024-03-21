import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DecorGridComponent} from "./decor-grid/decor-grid.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SpinnerComponent} from "../shared/spinner/spinner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    DecorGridComponent,
    SidenavComponent,
    SpinnerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  blogPosts: { title: string, tags: string[], image: string }[][] = [];
  ngOnInit(): void {
    this.blogPosts = [
      [
        { title: 'RPDDK - Szálka', tags: ['Travelling'], image: '/assets/images/decreased_resolution/1.jpg' },
        { title: 'Sunset with plants', tags: ['Gardening', 'Travelling', 'Cooking', 'Journaling'], image: '/assets/images/decreased_resolution/2.jpg' },
        { title: 'Quick trip to Tatabánya', tags: ['Travelling'], image: '/assets/images/decreased_resolution/3.jpg' },
        { title: 'Family trip part three', tags: ['Travelling'], image: '/assets/images/decreased_resolution/4.jpg' },
        { title: 'Family trip part two', tags: ['Travelling'], image: '/assets/images/decreased_resolution/5.jpg' },
        { title: 'Family trip part one', tags: ['Travelling'], image: '/assets/images/decreased_resolution/6.jpg' },
        { title: 'Wine tasting with view', tags: ['Cooking','Travelling'], image: '/assets/images/decreased_resolution/7.jpg' },
        { title: 'Sunrise at the Kisbalaton', tags: ['Travelling'], image: '/assets/images/decreased_resolution/8.jpg' },
        { title: 'Architecture', tags: ['Travelling'], image: '/assets/images/decreased_resolution/9.jpg' },
        { title: 'Painting with flowers', tags: ['Travelling'], image: '/assets/images/decreased_resolution/10.jpg' },
        { title: 'Croatia day 3', tags: ['Travelling'], image: '/assets/images/decreased_resolution/11.jpg' }
      ],
      [
        { title: 'Croatia day 2', tags: ['Travelling'], image: '/assets/images/decreased_resolution/12.jpg' },
        { title: 'Croatia day 1', tags: ['Travelling'], image: '/assets/images/decreased_resolution/13.jpg' },
        { title: 'Sunset', tags: ['Travelling'], image: '/assets/images/decreased_resolution/14.jpg' },
        { title: 'Vienna, here I come', tags: ['Travelling'], image: '/assets/images/decreased_resolution/15.jpg' },
        { title: 'Nyúl', tags: ['Travelling'], image: '/assets/images/decreased_resolution/16.jpg' },
        { title: 'Globe', tags: ['Travelling'], image: '/assets/images/decreased_resolution/17.jpg' },
        { title: 'My guy stands still in the library', tags: ['Travelling'], image: '/assets/images/decreased_resolution/18.jpg' },
        { title: 'Rizz? sry I am a millennial', tags: ['Travelling'], image: '/assets/images/decreased_resolution/19.jpg' },
        { title: 'Nails', tags: ['Travelling'], image: '/assets/images/decreased_resolution/20.jpg' },
        { title: 'Hmm', tags: ['Travelling'], image: '/assets/images/decreased_resolution/21.jpg' },
        { title: 'A busy man', tags: ['Travelling'], image: '/assets/images/decreased_resolution/22.jpg' }
      ],
      [
        { title: 'Tokaj', tags: ['Travelling'], image: '/assets/images/decreased_resolution/23.jpg' },
        { title: 'Blog Post 4', tags: ['Travelling'], image: '/assets/images/decreased_resolution/24.jpg' },
        { title: 'Blog Post 3', tags: ['Travelling'], image: '/assets/images/decreased_resolution/25.jpg' },
        { title: 'Blog Post 2', tags: ['Travelling'], image: '/assets/images/decreased_resolution/26.jpg' },
        { title: 'Blog Post 1', tags: ['Travelling'], image: '/assets/images/decreased_resolution/27.jpg' }
      ]
    ];

  }


}
