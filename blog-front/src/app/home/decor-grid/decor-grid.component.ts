import {Component, Input} from '@angular/core';
import {NgStyle, NgClass, NgOptimizedImage} from "@angular/common";
import {SpinnerComponent} from "../../shared/spinner/spinner.component";
import {TagComponent} from "../../shared/tag/tag.component";

@Component({
  selector: 'app-decor-grid',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgOptimizedImage,
    SpinnerComponent,
    TagComponent
  ],
  templateUrl: './decor-grid.component.html',
  styleUrl: './decor-grid.component.scss'
})
export class DecorGridComponent{
  @Input() blogPosts : { title: string, tags: string[], image: string }[] = [];


  classNames: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];


}
