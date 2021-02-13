export interface User {
    userID?: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: number,
    skills: Skill,
    address: Address,
    employmentHistory: EmploymentHistory
}

export interface Skill {
    skillName: string
}

export interface Address {
    addressField1: string,
    addressField2: string,
    city: string,
    state: string,
    zipcode: string
}

export interface  EmploymentHistory {
    companyName: string,
    companyAddress: string,
    companyPhoneNumber: number,
    jobTitle: string,
    startDate: Date,
    endDate: Date,
    isCurrentJob: boolean,
    reasonForLeaving: string
}