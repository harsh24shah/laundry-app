import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('Order Preferences');
  }

  categories = [
    { value: 'load-wash', viewValue: 'UPI' },
    { value: 'g-clean', viewValue: 'Credit card' },
    { value: 'wash-iron', viewValue: 'Debit card' },
    { value: 'ironing', viewValue: 'Net Banking' },
    { value: 'cleaning', viewValue: 'Cash on Delivery' }
  ]
}
