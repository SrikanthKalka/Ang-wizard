import { Injectable } from '@angular/core';
import { FormData , PersonalInfo } from './userData.model';


@Injectable()
export class FormDataService {

  private formdata: FormData = new FormData();

  private isPersonalFormValid = false;

  constructor() { }

  getPersonalData(): PersonalInfo {
  const personal: PersonalInfo = {
    firstName: this.formdata.firstName,
    lastName: this.formdata.lastName,
    email: this.formdata.email,
    phone: this.formdata.phone
  }
  return personal;
  }
 
  setPersonalData(data: PersonalInfo){
    this.formdata.firstName = data.firstName;
    this.formdata.lastName = data.lastName;
    this.formdata.email = data.email;
    this.formdata.phone = data.phone;
    this.isPersonalFormValid = true;

  }


}
