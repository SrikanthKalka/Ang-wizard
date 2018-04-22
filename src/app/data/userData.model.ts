export class FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
    }
}

export class PersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}