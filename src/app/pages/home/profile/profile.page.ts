import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  states = [
    { value: 'gj', viewValue: 'Gujarat' },
    { value: 'mp', viewValue: 'Maharastra' },
    { value: 'rj', viewValue: 'Rajasthan' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
