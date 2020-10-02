import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.page.html',
  styleUrls: ['./address-form.page.scss'],
})
export class AddressFormPage implements OnInit {


  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('Change Address');
  }

}
