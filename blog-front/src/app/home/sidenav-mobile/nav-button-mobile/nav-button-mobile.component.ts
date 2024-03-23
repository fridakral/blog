import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-button-mobile',
  standalone: true,
  imports: [],
  templateUrl: './nav-button-mobile.component.html',
  styleUrl: './nav-button-mobile.component.scss'
})
export class NavButtonMobileComponent {
  @Input() name!: string;

}
