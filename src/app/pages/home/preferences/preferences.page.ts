import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categories = [
    {value: 'cleaning', viewValue: 'Cash on Delivery'},
    {value: 'load-wash', viewValue: 'UPI'},
    {value: 'g-clean', viewValue: 'Credit card'},
    {value: 'wash-iron', viewValue: 'Debit card'},
    {value: 'ironing', viewValue: 'Net Banking'}
  ]
}
