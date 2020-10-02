import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('Addresses');
  }

}
