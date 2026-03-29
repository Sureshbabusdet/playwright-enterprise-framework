import { faker } from '@faker-js/faker';

export type User = {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
};

export class UserBuilder {
  private user: User;

  constructor() {
    this.user = {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: 'Test@123',

      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      country: 'India',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobileNumber: faker.phone.number('9999999999')
    };
  }

  // 🔹 Fluent Overrides
  withName(name: string): this {
    this.user.name = name;
    return this;
  }

  withEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  withPassword(password: string): this {
    this.user.password = password;
    return this;
  }

  withCountry(country: string): this {
    this.user.country = country;
    return this;
  }

  // 🔹 Build Final Object
  build(): User {
    return { ...this.user };
  }
}