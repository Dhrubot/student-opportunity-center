export interface User {
    userID?: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: number,
    address: Address,
    employmentHistory: EmploymentHistory
}

interface Address {
    addressField1: string,
    addressField2: string,
    city: string,
    state: string,
    zipcode: string
}

interface  EmploymentHistory {
    companyName: string,
    companyAddress: string,
    companyPhoneNumber: number,
    jobTitle: string,
    startDate: Date,
    endDate: Date,
    isCurrentJob: boolean,
    reasonForLeaving: string
}