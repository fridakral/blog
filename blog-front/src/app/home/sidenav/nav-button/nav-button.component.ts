import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {

  @Input() data: { icon: string, iconAlt : string, name: string, isChosen: boolean} | null = null;



}
