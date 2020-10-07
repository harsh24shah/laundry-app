import { Component } from '@angular/core';

import { PageTitleService } from 'src/app/shared/services/pagetitle.service';
import { TogglemenuService } from 'src/app/shared/services/togglemenu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private togglemenuService: TogglemenuService, private pageTitleService: PageTitleService) { }


  ngOnInit() {
    this.pageTitleService.changeTitlle('Dhulaiwala');
    this.pageTitleService.showBackIcon(false);
  }

  changeOfRoutes(){
    this.togglemenuService.setSideBarToggle(false);
  }
}
