import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from './data/form-data.service';


@Component({
  selector: 'user-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
 @Input() formData; 
 
 constructor(private formDataService: FormDataService){

  }

  ngOnInit(){
    this.formData = this.formDataService.getPersonalData();
  }

}
