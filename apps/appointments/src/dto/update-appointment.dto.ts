import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDto } from './create-appointment.dto';

// PartialType olarak createAppDTO tanımı yaptığımız için oradaki le aynı fieldlar demek oluyor
export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}
