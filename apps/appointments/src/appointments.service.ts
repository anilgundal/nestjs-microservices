import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentsRepository } from './appointments.repository';

@Injectable()
export class AppointmentsService {
  constructor(private readonly appointmentRepository: AppointmentsRepository) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentRepository.create({
      ...createAppointmentDto,
      timestamp: new Date(),
      userId: '123',
    });
  }

  findAll() {
    return this.appointmentRepository.find({});
  }

  findOne(_id: string) {
    return this.appointmentRepository.findOne({ _id });
  }

  update(_id: string, updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentRepository.findOneAndUpdate(
      { _id },
      { $set: updateAppointmentDto },
    );
  }

  remove(_id: string) {
    return this.appointmentRepository.findOneAndDelete({ _id });
  }
}
