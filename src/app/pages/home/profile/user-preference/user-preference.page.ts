import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';

@Component({
  selector: 'app-user-preference',
  templateUrl: './user-preference.page.html',
  styleUrls: ['./user-preference.page.scss'],
})
export class UserPreferencePage implements OnInit {


  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('User Preferences');
  }

}
