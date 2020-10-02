import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/pagetitle.service';
interface Categories {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.page.html',
  styleUrls: ['./our-services.page.scss'],
})
export class OurServicesPage implements OnInit {
  selected = 'Select Catrgory';
  categories: Categories[] = [
    {value: 'cleaning', viewValue: 'Dry Cleaning'},
    {value: 'load-wash', viewValue: 'Load Wash'},
    {value: 'g-clean', viewValue: 'Green Cleaning'},
    {value: 'wash-iron', viewValue: 'Wash & Iron'},
    {value: 'ironing', viewValue: 'Ironing'},
    {value: 'leather', viewValue: 'Leather'},
    {value: 'carpet', viewValue: 'Carpet'},
    {value: 'bags', viewValue: 'Bags'},
    {value: 'shoes', viewValue: 'Shoes'},
    {value: 'curtain', viewValue: 'Curtain cleaning'}
  ];

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.changeTitlle('Services');
  }

}
