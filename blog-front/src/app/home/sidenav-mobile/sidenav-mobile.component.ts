import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavButtonComponent} from "../sidenav/nav-button/nav-button.component";
import {NavButtonMobileComponent} from "./nav-button-mobile/nav-button-mobile.component";

@Component({
  selector: 'app-sidenav-mobile',
  standalone: true,
  imports: [
    NavButtonComponent,
    NavButtonMobileComponent
  ],
  templateUrl: './sidenav-mobile.component.html',
  styleUrl: './sidenav-mobile.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style(
        {
          height: '200px'
        }
      )),
      state('closed', style(
        {
          height: '70px'
        }
      )),
      transition('open => closed', [animate('0.3s')]),
      transition('closed => open', [animate('0.2s')]),
    ])
    ]
})
export class SidenavMobileComponent {
  @Input() isOpen!: boolean;
  @Output() togglePressEvent = new EventEmitter<void>();
  @Input() tags!: { icon: string; iconAlt: string; name: string; isChosen: boolean }[];

}
