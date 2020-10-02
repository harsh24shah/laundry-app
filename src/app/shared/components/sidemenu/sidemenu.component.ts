import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/pagetitle.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
  }

  changePageTitle(title: string){
    this.pageTitleService.changeTitlle(title);
  }
}
