import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';

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

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('Profile');
    this.pageTitleService.showBackIcon(false);
  }

}
