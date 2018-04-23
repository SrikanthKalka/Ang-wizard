export class FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cardType: string;
    cardNumber: string;
    cardExpiry: string;
    cardCvv: string;
    street: string;
    city: string;
    state: string;
    zip: string;

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.cardType = '';
        this.cardExpiry = '';
        this.cardNumber = '';
        this.cardCvv = '';
        this.street = '';
        this.city = '';
        this.zip = '';
        
    }
}

export class PersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export class CardInfo {

    cardType: string;
    cardNumber: string;
    cardExpiry: string;
    cardCvv: string;

}

export class AddressInfo{
    street: string;
    city: string;
    state: string;
    zip: string;

}