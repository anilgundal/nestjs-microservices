import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { AppointmentsRepository } from './appointments.repository';
import {
  AppointmentDocument,
  AppointmentSchema,
} from './models/appointment.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: AppointmentDocument.name, schema: AppointmentSchema },
    ]),
    LoggerModule,
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentsRepository],
})
export class AppointmentsModule {}
