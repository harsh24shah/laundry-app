import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('Checkout');
  }
}
