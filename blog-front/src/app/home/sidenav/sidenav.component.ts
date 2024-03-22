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
    { icon: 'assets/icons/boot.png', iconAlt: 'hiking-boot', name: 'Utazás', isChosen: true },
    { icon: 'assets/icons/brain.png', iconAlt: 'brain', name: 'Önismeret?', isChosen: true },
    { icon: 'assets/icons/cooking.png', iconAlt: 'cooking', name: 'Étel-ital', isChosen: true },
    { icon: 'assets/icons/diary.png', iconAlt: 'diary', name: 'Naplózás', isChosen: true },
    { icon: 'assets/icons/shovels.png', iconAlt: 'shovels', name: 'Kert', isChosen: true }
  ];
}
