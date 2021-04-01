import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})

export class NewsletterComponent {
  public user: User = new User();
}
