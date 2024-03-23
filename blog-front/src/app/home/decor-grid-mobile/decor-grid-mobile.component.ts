import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ImageCardComponent} from "../../shared/image-card/image-card.component";
import {Subscription} from "rxjs";
import {BreakpointService} from "../../shared/services/breakpoint.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-decor-grid-mobile',
  standalone: true,
  imports: [
    ImageCardComponent,
    NgClass
  ],
  templateUrl: './decor-grid-mobile.component.html',
  styleUrl: './decor-grid-mobile.component.scss'
})
export class DecorGridMobileComponent implements OnDestroy, OnInit{

  @Input() blogPosts : { title: string, tags: string[], image: string }[] = [];
  @Input() isOpen!: boolean;

  blogPostsChunks:{ title: string, tags: string[], image: string }[][] = [];

  currentBreakpoint:string = '';
  subscription?: Subscription;

  constructor(private breakpointService: BreakpointService) {
    this.subscription= this.breakpointService.breakpoint$.subscribe(value => {
      this.breakpointService.breakpointChanged();
      this.currentBreakpoint= this.breakpointService.currentBreakpoint.value;
    });
  }

  classNames: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  ngOnInit() {
    this.blogPostsChunks = this.chunk(this.blogPosts, 8);
  }

  chunk(array: any[], size: number) {
    return array.reduce((acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]), []);

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
