import { Component } from '@angular/core';
import {NavButtonComponent} from "./nav-button/nav-button.component";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NavButtonComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  tags = [
    { icon: 'assets/icons/boot.png', iconAlt: 'hiking-boot', name: 'Hiking', isChosen: true },
    { icon: 'assets/icons/brain.png', iconAlt: 'brain', name: 'Psychology', isChosen: true },
    { icon: 'assets/icons/cooking.png', iconAlt: 'cooking', name: 'Cooking', isChosen: true },
    { icon: 'assets/icons/diary.png', iconAlt: 'diary', name: 'Journaling', isChosen: true },
    { icon: 'assets/icons/shovels.png', iconAlt: 'shovels', name: 'Gardening', isChosen: true }
  ];
}
