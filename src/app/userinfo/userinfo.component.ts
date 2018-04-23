import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormData , PersonalInfo } from '../data/userData.model';
import {FormDataService } from '../data/form-data.service'

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  personalInfo: PersonalInfo;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.personalInfo = this.formDataService.getPersonalData();
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      this.formDataService.setPersonalData(this.personalInfo);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the card page
         this.router.navigate(['/cardInfo']);
      }
  }

}
