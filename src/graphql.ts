
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewAppt {
    author: string;
    start_date: string;
    end_date: string;
}

export class UpdateAppt {
    id: string;
    start_date?: Nullable<string>;
    end_date?: Nullable<string>;
}

export class NewUser {
    first_name: string;
    last_name: string;
    birthdate?: Nullable<string>;
    appointments?: Nullable<Nullable<string>[]>;
}

export class UpdateUser {
    id: string;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    birthdate?: Nullable<string>;
}

export class Appointment {
    id: string;
    author: User;
    start_date: string;
    end_date: string;
    createdAt: string;
}

export abstract class IQuery {
    abstract appointments(): Appointment[] | Promise<Appointment[]>;

    abstract appointment(id: string): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAppt(input?: Nullable<NewAppt>): Appointment | Promise<Appointment>;

    abstract updateAppt(input?: Nullable<UpdateAppt>): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract deleteAppt(id: string): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;

    abstract updateUser(input?: Nullable<UpdateUser>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    appointments: Appointment[];
    createdAt: string;
}

type Nullable<T> = T | null;
