import { Component, OnInit } from '@angular/core';
import * as mockdata from '../mockdata/mockdata.component';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faHeart = faHeart;
  faStar = faStar;

  description =[];
  author = [];
  image = []; 
  likes = []; 
  title= [];
  authorUser;
  status;
  constructor() { }

  ngOnInit() {
    this.authorUser = mockdata.user[0].firstName + " " + mockdata.user[0].lastName;
    this.status = mockdata.user[0].role;
    for (let i = 0; i < mockdata.listArticle.length; i++) {
      this.title[i] = mockdata.listArticle[i].title;
      this.description[i] = mockdata.listArticle[i].description;
      this.author[i] = mockdata.listArticle[i].author;
      this.likes[i] = mockdata.listArticle[i].reactionsCounts.likes;
      this.image[i] = mockdata.listArticle[i].image;
    }

  }

}
