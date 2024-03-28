import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TagComponent} from "../tag/tag.component";
import {Router} from "@angular/router";

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
  @Input() blogPost!: { title: string, tags: string[], image: string, id: number };

  constructor(
    private router: Router
  ) {
  }

  openPost(){
    let slug = this.blogPost.title.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.router.navigate(['/blog', this.blogPost.id, slug]).then(r => {});
  }
}
