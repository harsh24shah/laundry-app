import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/pagetitle.service';

import { TogglemenuService } from '../../services/togglemenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public togglemenuService: TogglemenuService, public pageTitleService: PageTitleService) { }

  ngOnInit() {}

}
