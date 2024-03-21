import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input() data: { icon: string, iconAlt : string, name: string, isChosen: boolean } | null = null;



}
