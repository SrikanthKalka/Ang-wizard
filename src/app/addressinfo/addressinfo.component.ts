import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddressInfo } from '../data/userData.model';
import { FormDataService } from '../data/form-data.service';
@Component({
  selector: 'app-address-info',
  templateUrl: './addressinfo.component.html',
  styleUrls: ['./addressinfo.component.css']
})
export class AddressInfoComponent implements OnInit {
  title = 'Address Information';
  address: AddressInfo;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.address = this.formDataService.getAddress();
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }

      this.formDataService.setAddress(this.address);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the card page
          this.router.navigate(['/cardInfo']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the summary page
          this.router.navigate(['/summaryInfo']);
      }
  }
}
