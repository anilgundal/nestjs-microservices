import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { DatabaseModule, LoggerModule } from "@app/common";
import { AppointmentsRepository } from './appointments.repository';
import {
  AppointmentDocument,
  AppointmentSchema,
} from './models/appointment.schema';
import { pinoHttp } from "pino-http";
import { AuthModule } from "../../auth/src/auth.module";
import { ConfigModule } from "@nestjs/config";
import * as Joi from  'joi';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: AppointmentDocument.name, schema: AppointmentSchema },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      })
    })
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentsRepository],
})
export class AppointmentsModule {}
