import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Appointment } from '@prisma/client';
import { createApptDTO } from './dto/createAppt.dto';
import { UserNotFoundException, ApptNotFoundException } from '../exceptions/NotFound.exception';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaError } from '../utils/prismaError';

@Injectable()
export class AppointmentsService {
    constructor(private prisma: PrismaService) { }

    // Get a single appointment
    async appointment(id: string): Promise<Appointment | null> {
        const appt = await this.prisma.appointment.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                user: true, // Return all fields
            },
        });

        if (!appt) throw new ApptNotFoundException(parseInt(id));

        return appt;
    }

    // Get multiple posts
    async appointments(): Promise<Appointment[]> {
        return this.prisma.appointment.findMany({
            include: {
                user: true, // Return all fields
            },
        });
    }

    // Create an appointment
    async createAppt(input: createApptDTO): Promise<Appointment> {
        const today = new Date();
        const userExist = await this.prisma.user.findUnique({
            where: {
                id: parseInt(input.user),
            },
        });

        if (!userExist) throw new UserNotFoundException(parseInt(input.user));

        if (Date.parse(input.start_date) < today.valueOf()) {
            throw new HttpException('Start date must be greater than or equal to today', HttpStatus.BAD_REQUEST);
        } 
        
        if (Date.parse(input.start_date) > Date.parse(input.end_date)) {
            throw new HttpException('End date must be less than start date', HttpStatus.BAD_REQUEST);
        }

        console.log(Date.parse(input.start_date))
        console.log(Date.parse(input.end_date))

        const newAppt = await this.prisma.appointment.create({
            data: {
                ...input,
                user: {
                    connect: {
                        id: userExist.id,
                    },
                },
            },
            include: {
                user: true, // Return all fields
            },
        });
        return newAppt;
    }

    // delete an appointment
    async deleteAppt(id: string): Promise<Appointment> {

        try {
            const deleteAppt = await this.prisma.appointment.delete({
                where: {
                    id: parseInt(id),
                },
                include: {
                    user: true, // Return all fields
                },
            });
            return deleteAppt;
        } catch (error) {
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === PrismaError.RecordDoesNotExist
            ) {
                throw new ApptNotFoundException(parseInt(id));
            }
            throw error;
        }
    }
}
