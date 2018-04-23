import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/form-data.service';
import { summaryInfo } from '../data/userData.model';

@Component({
  selector: 'app-summaryinfo',
  templateUrl: './summaryinfo.component.html',
  styleUrls: ['./summaryinfo.component.css']
})
export class SummaryinfoComponent implements OnInit {

  title = 'Summary Information';
  summary: summaryInfo;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.summary = this.formDataService.getSummary();
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      this.formDataService.setSummaryData(this.summary);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the card page
          this.router.navigate(['/cardInfo']);
      }
  }

  //TODO submit function


}
