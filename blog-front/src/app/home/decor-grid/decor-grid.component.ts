import {Component, Input} from '@angular/core';
import {NgStyle, NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-decor-grid',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './decor-grid.component.html',
  styleUrl: './decor-grid.component.scss'
})
export class DecorGridComponent{
  @Input() blogPosts : { title: string, tag: string, image: string }[] = [];

  classNames: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];


}
