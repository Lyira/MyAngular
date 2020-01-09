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
  faHeart:any = faHeart;
  faStar:any = faStar;
  faUserCircle:any = faUserCircle;
  faChevronRight:any = faChevronRight;
  faChevronLeft:any = faChevronLeft;

  author:string;
  authorComment:string;
  image:string; 
  likes:number; 
  title:string;
  text:string;
  textComment:string;
  photoAuthor:string;
  setVariables(){
    this.title = mockdata.listArticles[3].title,
    this.author = mockdata.listArticles[3].author,
    this.authorComment = mockdata.listArticles[3].comments.author,
    this.likes = mockdata.listArticles[3].reactionsCounts.likes,
    this.image = mockdata.listArticles[3].image,
    this.text = mockdata.listArticles[3].text,
    this.textComment = mockdata.listArticles[3].comments.text,
    this.photoAuthor = mockdata.users[3].photo
  }
  constructor() {}
  
  ngOnInit() {
    this.setVariables();
  }
  
  
}
