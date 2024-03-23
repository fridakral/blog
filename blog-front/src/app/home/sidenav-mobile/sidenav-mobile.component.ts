import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-mobile',
  standalone: true,
  imports: [],
  templateUrl: './sidenav-mobile.component.html',
  styleUrl: './sidenav-mobile.component.scss'
})
export class SidenavMobileComponent {
  @Input() isOpen!: boolean;
  @Output() togglePressEvent = new EventEmitter<void>();

}
