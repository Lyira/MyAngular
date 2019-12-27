import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as mockdata from '../mockdata/mockdata.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  faHeart = faHeart;
  faStar = faStar;
  faUserCircle = faUserCircle;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  author;
  authorComment;
  image; 
  likes; 
  title;
  text;
  textComment;

  constructor() { }

  ngOnInit() {
    this.title = mockdata.listArticle[3].title;
    this.author = mockdata.listArticle[3].author;
    this.authorComment = mockdata.listArticle[3].comments.author;
    this.likes = mockdata.listArticle[3].reactionsCounts.likes;
    this.image = mockdata.listArticle[3].image;
    this.text = mockdata.listArticle[3].text;
    this.textComment = mockdata.listArticle[3].comments.text;
  }

}
