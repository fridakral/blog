import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TagComponent} from "../tag/tag.component";

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TagComponent
  ],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
  @Input() blogPost!: { title: string, tags: string[], image: string };
}
