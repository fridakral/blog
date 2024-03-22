import {Component, Input, OnDestroy} from '@angular/core';
import {NgStyle, NgClass, NgOptimizedImage} from "@angular/common";
import {SpinnerComponent} from "../../shared/spinner/spinner.component";
import {TagComponent} from "../../shared/tag/tag.component";
import {Subscription} from "rxjs";
import {BreakpointService} from "../../shared/services/breakpoint.service";

@Component({
  selector: 'app-decor-grid',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgOptimizedImage,
    SpinnerComponent,
    TagComponent
  ],
  templateUrl: './decor-grid.component.html',
  styleUrl: './decor-grid.component.scss'
})
export class DecorGridComponent implements OnDestroy{
  @Input() blogPosts : { title: string, tags: string[], image: string }[] = [];

  currentBreakpoint:string = '';
  subscription?: Subscription;

  largeGrid = '"a b c d e" "a f f g e" "h i j k k"';
  mobileGrid = '"a b" "c b" "d d" "e f" "e g" "h h"';

  constructor(private breakpointService: BreakpointService) {
    this.subscription= this.breakpointService.breakpoint$.subscribe(value => {
      this.breakpointService.breakpointChanged();
      this.currentBreakpoint= this.breakpointService.currentBreakpoint.value;
    });
  }

  classNames: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];


  ngOnDestroy() {

  }
}
