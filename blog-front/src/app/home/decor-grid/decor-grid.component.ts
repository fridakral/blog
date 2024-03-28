import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgStyle, NgClass, NgOptimizedImage} from "@angular/common";
import {SpinnerComponent} from "../../shared/spinner/spinner.component";
import {TagComponent} from "../../shared/tag/tag.component";
import {Subscription} from "rxjs";
import {BreakpointService} from "../../shared/services/breakpoint.service";
import {ImageCardComponent} from "../../shared/image-card/image-card.component";

@Component({
  selector: 'app-decor-grid',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgOptimizedImage,
    SpinnerComponent,
    TagComponent,
    ImageCardComponent
  ],
  templateUrl: './decor-grid.component.html',
  styleUrl: './decor-grid.component.scss'
})
export class DecorGridComponent implements OnDestroy, OnInit{

  @Input() blogPosts : { title: string, tags: string[], image: string }[] = [];

  blogPostsChunks:{ title: string, tags: string[], image: string }[][] = [];

  currentBreakpoint:string = '';
  subscription?: Subscription;

  constructor(private breakpointService: BreakpointService) {
    this.subscription= this.breakpointService.breakpoint$.subscribe(value => {
      this.breakpointService.breakpointChanged();
      this.currentBreakpoint= this.breakpointService.currentBreakpoint.value;
    });
  }

  classNames: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  @Input() isOpen!: boolean;

  ngOnInit() {
    this.blogPostsChunks = this.chunk(this.blogPosts, 11);
  }

  chunk(array: any[], size: number) {
    return array.reduce((acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]), []);

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
