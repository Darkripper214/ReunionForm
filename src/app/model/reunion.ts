export interface Reunion {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  dvd: boolean;
  guestFirstName?: string;
  guestLastName?: string;
  events?: string[];
  comments?: string;
}

export class ReunionClass {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: number,
    public dvd: boolean,
    public guestFirstName?: string,
    public guestLastName?: string,
    public events?: string[],
    public comments?: string
  ) {}
}
