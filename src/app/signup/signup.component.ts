import { Component, OnInit } from '@angular/core';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import { IconName} from '@fortawesome/fontawesome-svg-core';
// import { IconName} from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  aEnvelope :any = faEnvelope;
  faKey :any = faKey;
  faUserPlus:any = faUserPlus;


  constructor() { }

  ngOnInit() {
  }

}
