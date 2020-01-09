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
  faCloudDownloadAlt:any = faCloudDownloadAlt;
  faHeart:any = faHeart;
  faStar:any = faStar;
 
  users:object[];
  listArticles:object[];
  setVariables(){
    this.listArticles = mockdata.listArticles;
    this.users = mockdata.users;
  }
  constructor() { }

  ngOnInit() {
    this.setVariables();
  }
}
