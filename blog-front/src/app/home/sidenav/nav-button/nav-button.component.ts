import {Component, Input, OnDestroy} from '@angular/core';
import {NgClass} from "@angular/common";
import {Subscription} from "rxjs";
import {BreakpointService} from "../../../shared/services/breakpoint.service";

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent implements OnDestroy{

  @Input() data: { icon: string, iconAlt : string, name: string, isChosen: boolean} | null = null;

  currentBreakpoint:string = '';
  subscription?: Subscription;

  constructor(private breakpointService: BreakpointService) {
    this.subscription = this.breakpointService.breakpoint$.subscribe(value => {
      this.breakpointService.breakpointChanged();
      this.currentBreakpoint = this.breakpointService.currentBreakpoint.value;
    });
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
