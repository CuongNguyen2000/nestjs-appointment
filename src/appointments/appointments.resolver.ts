import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppointmentsService } from './appointments.service';
import { createApptDTO } from './dto/createAppt.dto';

@Resolver()
export class AppointmentsResolver {
    constructor(private readonly apptService: AppointmentsService) {}

    @Query('appointments')
    async posts() {
        return this.apptService.appointments();
    }

    @Query('appointment')
    async post(@Args('id') args: string) {
        return this.apptService.appointment(args);
    }

    @Mutation('createAppt')
    async create(@Args('input') args: createApptDTO) {
        return this.apptService.createAppt(args);
    }

    @Mutation('deleteAppt')
    async delete(@Args('id') args: string) {
        return this.apptService.deleteAppt(args);
    }
 }
