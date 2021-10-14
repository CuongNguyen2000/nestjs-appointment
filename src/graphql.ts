
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum EnumUserRole {
    DOCTOR = "DOCTOR",
    THERAPY = "THERAPY",
    CARE_MANAGER = "CARE_MANAGER"
}

export class NewAppt {
    user: string;
    start_date: string;
    end_date: string;
}

export class UpdateAppt {
    id: string;
    start_date?: Nullable<string>;
    end_date?: Nullable<string>;
}

export class FindApptsByUser {
    user: string;
    start_date?: Nullable<string>;
    end_date?: Nullable<string>;
}

export class NewUser {
    email: string;
    first_name: string;
    last_name: string;
    birthdate?: Nullable<string>;
    role?: Nullable<EnumUserRole>;
    appointments?: Nullable<Nullable<string>[]>;
}

export class UpdateUser {
    id: string;
    email?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    birthdate?: Nullable<string>;
    role?: Nullable<EnumUserRole>;
}

export class Appointment {
    id: string;
    user: User;
    start_date: string;
    end_date: string;
    createdAt: string;
}

export abstract class IQuery {
    abstract appointments(): Appointment[] | Promise<Appointment[]>;

    abstract appointment(id: string): Nullable<Appointment> | Promise<Nullable<Appointment>>;

    abstract appointmentsByUser(user: string): Nullable<Nullable<Appointment>[]> | Promise<Nullable<Nullable<Appointment>[]>>;

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
    email: string;
    first_name: string;
    last_name: string;
    birthdate: string;
    appointments: Appointment[];
    role?: Nullable<EnumUserRole>;
    createdAt: string;
}

type Nullable<T> = T | null;
