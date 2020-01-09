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
  faHeart:any = faHeart;
  faStar:any = faStar;

  authorUser:string;
  status:string;
  photoAuthor:string;
  gender:string;
  email:string;
  listArticles:object[];
  setVariables() {
    this.authorUser = mockdata.users[3].firstName + " " + mockdata.users[3].lastName;
    this.status = mockdata.users[3].role;
    this.photoAuthor = mockdata.users[3].photo;
    this.gender = mockdata.users[3].gender;
    this.email = mockdata.users[3].email;
    this.listArticles = mockdata.listArticles;
  }
  constructor() { }

  ngOnInit() {
    this.setVariables(); 
  }

}
