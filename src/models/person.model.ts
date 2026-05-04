export interface Person {
    firstName: string;
    lastName: string;
    dob: Dob;
}

export interface Dob {
    day: number;
    month: number;
    year: number;
}
