import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

   breakpoint$ = this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.HandsetPortrait]);

   currentBreakpoint: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  breakpointChanged() {
    if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint.next('large');
    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint.next('medium');
    } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint.next('small');
    }else if(this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait)) {
      this.currentBreakpoint.next('mobile');
    }


  }
}
