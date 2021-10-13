import { NotFoundException } from '@nestjs/common';

export class ApptNotFoundException extends NotFoundException {
    constructor(apptId: number) {
        super(`Appointment with id ${apptId} not found`);
    }
}
