import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsletterComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

  signup(): void{
    console.log('signing up...');
  }

}
