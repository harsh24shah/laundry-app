import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('Bucket');
  }

}
