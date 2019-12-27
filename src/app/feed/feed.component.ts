import { Component, OnInit, Input } from '@angular/core';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import * as mockdata from '../mockdata/mockdata.component';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']

})
export class FeedComponent implements OnInit {
  faCloudDownloadAlt = faCloudDownloadAlt;
  faHeart = faHeart;
  faStar = faStar;
 
  description =[];
  author = [];
  image = []; 
  likes = []; 
  title= [];
  
  constructor() {  
    
  }

  ngOnInit() {
    for (let i = 0; i < mockdata.listArticle.length; i++) {
      this.title[i] = mockdata.listArticle[i].title;
      this.description[i] = mockdata.listArticle[i].description;
      this.author[i] = mockdata.listArticle[i].author;
      this.likes[i] = mockdata.listArticle[i].reactionsCounts.likes;
      this.image[i] = mockdata.listArticle[i].image;
    }
  }
}
