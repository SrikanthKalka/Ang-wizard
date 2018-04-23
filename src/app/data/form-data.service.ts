import { Injectable } from '@angular/core';
import { FormData, PersonalInfo, CardInfo, AddressInfo, summaryInfo } from './userData.model';


@Injectable()
export class FormDataService {

  private formdata: FormData = new FormData();

  private isPersonalFormValid = false;
  private isCardDetailsValid = false;
  private isAddressFormValid = false;
  private isSummaryDetailsValid = false;

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

  setPersonalData(data: PersonalInfo) {
    this.formdata.firstName = data.firstName;
    this.formdata.lastName = data.lastName;
    this.formdata.email = data.email;
    this.formdata.phone = data.phone;
    this.isPersonalFormValid = true;

  }

  getCardData(): CardInfo {

    const card: CardInfo = {
      cardType: this.formdata.cardType,
      cardNumber: this.formdata.cardNumber,
      cardExpiry: this.formdata.cardExpiry,
      cardCvv: this.formdata.cardCvv
    }
    return card;
  }

  setCardData(data: CardInfo) {
    this.formdata.cardType = data.cardType;
    this.formdata.cardNumber = data.cardNumber;
    this.formdata.cardCvv = data.cardCvv;
    this.formdata.cardExpiry = data.cardExpiry;
    this.isCardDetailsValid = true;
  }

  getAddress(): AddressInfo {
    // Return the Address data
    const address: AddressInfo = {
      street: this.formdata.street,
      city: this.formdata.city,
      state: this.formdata.state,
      zip: this.formdata.zip
    };
    return address;
  }

  setAddress(data: AddressInfo) {
    // Update the Address data only when the Address Form had been validated successfully
    this.isAddressFormValid = true;
    this.formdata.street = data.street;
    this.formdata.city = data.city;
    this.formdata.state = data.state;
    this.formdata.zip = data.zip;
    // Validate Address Step in Workflow
    // this.workflowService.validateStep(STEPS.address);
  }


  getSummary(): summaryInfo {

    const summary: summaryInfo = {
      firstName: this.formdata.firstName,
      lastName: this.formdata.lastName,
      email: this.formdata.email,
      phone: this.formdata.phone,
      cardType: this.formdata.cardType,
      cardNumber: this.formdata.cardNumber,
      cardExpiry: this.formdata.cardExpiry,
      cardCvv: this.formdata.cardCvv,
      street: this.formdata.street,
      city: this.formdata.city,
      state: this.formdata.state,
      zip: this.formdata.zip
    };
    return summary;
  }

  setSummaryData(data: summaryInfo) {

    this.formdata.firstName = data.firstName;
    this.formdata.lastName = data.lastName;
    this.formdata.email = data.email;
    this.formdata.phone = data.phone;
    this.formdata.cardType = data.cardType;
    this.formdata.cardNumber = data.cardNumber;
    this.formdata.cardCvv = data.cardCvv;
    this.formdata.cardExpiry = data.cardExpiry;
    this.formdata.street = data.street;
    this.formdata.city = data.city;
    this.formdata.state = data.state;
    this.formdata.zip = data.zip;
    this.isSummaryDetailsValid = true;
  }



}
