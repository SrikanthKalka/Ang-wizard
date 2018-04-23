import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/form-data.service';
import { CardInfo } from '../data/userData.model';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.css']
})
export class CardinfoComponent implements OnInit {
  title = 'Enter your card details';
  cardInfo: CardInfo;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.cardInfo = this.formDataService.getCardData();
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }

      this.formDataService.setCardData(this.cardInfo);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the personal page
          this.router.navigate(['/personalInfo']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['/addressInfo']);
      }
  }

}
