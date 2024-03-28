import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DecorGridComponent} from "./decor-grid/decor-grid.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SpinnerComponent} from "../shared/spinner/spinner.component";
import {BreakpointService} from "../shared/services/breakpoint.service";
import {Subscription} from "rxjs";
import {SidenavMobileComponent} from "./sidenav-mobile/sidenav-mobile.component";
import {DecorGridMobileComponent} from "./decor-grid-mobile/decor-grid-mobile.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    DecorGridComponent,
    SidenavComponent,
    SpinnerComponent,
    SidenavMobileComponent,
    DecorGridMobileComponent,
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  currentBreakpoint:string = '';
  subscription?: Subscription;
  isOpen: boolean = true;
  blogPostsToSend : {title: string, tags: string[], image: string, id: number}[] = [];



  constructor(private breakpointService: BreakpointService) {
    this.subscription= this.breakpointService.breakpoint$.subscribe(value => {
      this.breakpointService.breakpointChanged();
      this.currentBreakpoint= this.breakpointService.currentBreakpoint.value;
    });

    this.isOpen= (this.currentBreakpoint != 'mobile');
  }




  ngOnInit(): void {

    this.blogPostsToSend = [
      { title: 'RPDDK - Szálka', tags: ['Utazás'], image: '/assets/images/decreased_resolution/1.jpg', id: 1 },
      { title: 'Naplemente növényekkel', tags: ['Kert'], image: '/assets/images/decreased_resolution/2.jpg', id: 2 },
      { title: 'Tatabányai kirándulás', tags: ['Utazás'], image: '/assets/images/decreased_resolution/3.jpg', id: 3 },
      { title: 'Családi nyaralás 3.', tags: ['Utazás'], image: '/assets/images/decreased_resolution/4.jpg', id: 4 },
      { title: 'Családi nyaralás 2.', tags: ['Utazás'], image: '/assets/images/decreased_resolution/5.jpg', id: 5 },
      { title: 'Családi nyaralás 1.', tags: ['Utazás'], image: '/assets/images/decreased_resolution/6.jpg', id: 6 },
      { title: 'Borkóstolás kilátással', tags: ['Étel-ital','Utazás'], image: '/assets/images/decreased_resolution/7.jpg', id: 7 },
      { title: 'Napkelte', tags: ['Utazás'], image: '/assets/images/decreased_resolution/8.jpg', id: 8 },
      { title: 'Kupola', tags: ['Utazás'], image: '/assets/images/decreased_resolution/9.jpg', id: 9 },
      { title: 'Színes virágok', tags: ['Utazás'], image: '/assets/images/decreased_resolution/10.jpg', id: 10 },
      { title: 'Adria 3', tags: ['Utazás'], image: '/assets/images/decreased_resolution/11.jpg', id: 11 },
      { title: 'Adria 2', tags: ['Utazás'], image: '/assets/images/decreased_resolution/12.jpg', id: 12 },
      { title: 'Adria 1', tags: ['Utazás'], image: '/assets/images/decreased_resolution/13.jpg', id: 13 },
      { title: 'Naplemente', tags: ['Utazás'], image: '/assets/images/decreased_resolution/14.jpg', id: 14 },
      { title: 'Bécs', tags: ['Utazás'], image: '/assets/images/decreased_resolution/15.jpg', id: 15 },
      { title: 'Nyúli pincesor', tags: ['Utazás'], image: '/assets/images/decreased_resolution/16.jpg', id: 16 },
      { title: 'Izé', tags: ['Utazás'], image: '/assets/images/decreased_resolution/17.jpg', id: 17 },
      { title: 'Random képek', tags: ['Utazás'], image: '/assets/images/decreased_resolution/18.jpg', id: 18 },
      { title: 'Én', tags: ['Utazás'], image: '/assets/images/decreased_resolution/19.jpg', id: 19 },
      { title: 'Körmök', tags: ['Utazás'], image: '/assets/images/decreased_resolution/20.jpg', id: 20 },
      { title: 'Hmm', tags: ['Utazás'], image: '/assets/images/decreased_resolution/21.jpg', id: 21 },
      { title: 'Telefonáló Patrik', tags: ['Utazás'], image: '/assets/images/decreased_resolution/22.jpg', id: 22 },
      { title: 'Tokaj', tags: ['Utazás'], image: '/assets/images/decreased_resolution/23.jpg', id: 23 },
      { title: 'Blog Post 4', tags: ['Utazás'], image: '/assets/images/decreased_resolution/24.jpg', id: 24 },
      { title: 'Blog Post 3', tags: ['Utazás'], image: '/assets/images/decreased_resolution/25.jpg', id: 25 },
      { title: 'Blog Post 2', tags: ['Utazás'], image: '/assets/images/decreased_resolution/26.jpg', id: 26 },
      { title: 'Blog Post 1', tags: ['Utazás'], image: '/assets/images/decreased_resolution/27.jpg', id: 27 }
    ];
  }


  toggleSidenav(){
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
