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

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NavButtonComponent
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

  tags:{icon: string, iconAlt: string, name: string, isChosen:boolean}[] = [
    { icon: 'assets/icons/boot.png', iconAlt: 'hiking-boot', name: 'Utazás', isChosen: true },
    { icon: 'assets/icons/brain.png', iconAlt: 'brain', name: 'Önismeret?', isChosen: true},
    { icon: 'assets/icons/cooking.png', iconAlt: 'cooking', name: 'Étel-ital', isChosen: true},
    { icon: 'assets/icons/diary.png', iconAlt: 'diary', name: 'Naplózás', isChosen: true},
    { icon: 'assets/icons/shovels.png', iconAlt: 'shovels', name: 'Kert', isChosen: true}
  ];

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
