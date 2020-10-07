import { Component, OnInit } from '@angular/core';
import { TogglemenuService } from '../../services/togglemenu.service';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss'],
})
export class TabNavComponent implements OnInit {

  constructor(
    public togglemenuService: TogglemenuService,
  ) { }

  ngOnInit() {}

}
