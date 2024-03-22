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
        { title: 'RPDDK - Szálka', tags: ['Utazás'], image: '/assets/images/decreased_resolution/1.jpg' },
        { title: 'Naplementee növényekkel', tags: ['Kert'], image: '/assets/images/decreased_resolution/2.jpg' },
        { title: 'Tatabányai kirándulás', tags: ['Utazás'], image: '/assets/images/decreased_resolution/3.jpg' },
        { title: 'Családi nyaralás 3.', tags: ['Utazás'], image: '/assets/images/decreased_resolution/4.jpg' },
        { title: 'Családi nyaralás 2.', tags: ['Utazás'], image: '/assets/images/decreased_resolution/5.jpg' },
        { title: 'Családi nyaralás 1.', tags: ['Utazás'], image: '/assets/images/decreased_resolution/6.jpg' },
        { title: 'Borkóstolás kilátással', tags: ['Étel-ital','Utazás'], image: '/assets/images/decreased_resolution/7.jpg' },
        { title: 'Napkelte', tags: ['Utazás'], image: '/assets/images/decreased_resolution/8.jpg' },
        { title: 'Kupola', tags: ['Utazás'], image: '/assets/images/decreased_resolution/9.jpg' },
        { title: 'Színes virágok', tags: ['Utazás'], image: '/assets/images/decreased_resolution/10.jpg' },
        { title: 'Adria 3', tags: ['Utazás'], image: '/assets/images/decreased_resolution/11.jpg' }
      ],
      [
        { title: 'Adria 2', tags: ['Utazás'], image: '/assets/images/decreased_resolution/12.jpg' },
        { title: 'Adria 1', tags: ['Utazás'], image: '/assets/images/decreased_resolution/13.jpg' },
        { title: 'Naplemente', tags: ['Utazás'], image: '/assets/images/decreased_resolution/14.jpg' },
        { title: 'Bécs', tags: ['Utazás'], image: '/assets/images/decreased_resolution/15.jpg' },
        { title: 'Nyúli pincesor', tags: ['Utazás'], image: '/assets/images/decreased_resolution/16.jpg' },
        { title: 'Izé', tags: ['Utazás'], image: '/assets/images/decreased_resolution/17.jpg' },
        { title: 'Random képek', tags: ['Utazás'], image: '/assets/images/decreased_resolution/18.jpg' },
        { title: 'Én', tags: ['Utazás'], image: '/assets/images/decreased_resolution/19.jpg' },
        { title: 'Körmök', tags: ['Utazás'], image: '/assets/images/decreased_resolution/20.jpg' },
        { title: 'Hmm', tags: ['Utazás'], image: '/assets/images/decreased_resolution/21.jpg' },
        { title: 'Telefonáló Patrik', tags: ['Utazás'], image: '/assets/images/decreased_resolution/22.jpg' }
      ],
      [
        { title: 'Tokaj', tags: ['Utazás'], image: '/assets/images/decreased_resolution/23.jpg' },
        { title: 'Blog Post 4', tags: ['Utazás'], image: '/assets/images/decreased_resolution/24.jpg' },
        { title: 'Blog Post 3', tags: ['Utazás'], image: '/assets/images/decreased_resolution/25.jpg' },
        { title: 'Blog Post 2', tags: ['Utazás'], image: '/assets/images/decreased_resolution/26.jpg' },
        { title: 'Blog Post 1', tags: ['Utazás'], image: '/assets/images/decreased_resolution/27.jpg' }
      ]
    ];

  }


}
