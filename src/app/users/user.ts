
export interface User {
    userID?: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: number,
    address: Address
}

interface Address {
    addressField1: string,
    addressField2: string,
    city: string,
    state: string,
    zipcode: string
}