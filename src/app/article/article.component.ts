import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  faHeart = faHeart;
  faStar = faStar;
  faUserCircle = faUserCircle;
  constructor() { }

  ngOnInit() {
  }

}
