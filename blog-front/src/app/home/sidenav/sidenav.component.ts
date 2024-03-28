import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {NavButtonComponent} from "./nav-button/nav-button.component";
import {
  trigger,
  state,
  transition,
  style, animate
} from "@angular/animations";
import {Subscription} from "rxjs";
import {BreakpointService} from "../../shared/services/breakpoint.service";
import {authors, tags} from "../../shared/utils/consts";
import {TagComponent} from "../../shared/tag/tag.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NavButtonComponent,
    TagComponent,
    NgStyle
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style(
        {
          width: '200px'
        }
      )),
      state('closed', style(
        {
          width: '0'
        }
      )),
      state('halfway', style(
        {
          width: '70px'
        }
      )),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.5s')]),
      transition('halfway => closed', [animate('0.2s')]),
      transition('closed => halfway', [animate('0.2s')]),
    ])
  ]

})
export class SidenavComponent implements OnDestroy{

  @Input() public isOpen : boolean = false;
  @Output() togglePressEvent = new EventEmitter<void>();

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

  protected readonly tags = tags;
  protected readonly authors = authors;
}
