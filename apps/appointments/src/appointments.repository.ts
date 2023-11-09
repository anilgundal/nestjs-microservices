import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { AppointmentDocument } from './models/appointment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppointmentsRepository extends AbstractRepository<AppointmentDocument> {
  protected readonly logger = new Logger(AbstractRepository.name);

  constructor(
    @InjectModel(AppointmentDocument.name)
    appointmentModel: Model<AppointmentDocument>,
  ) {
    super(appointmentModel);
  }
}
