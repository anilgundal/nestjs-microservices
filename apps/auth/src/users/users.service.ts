import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
  }

  async validateUser(email: string, passport: string){
    const user = await this.usersRepository.findOne({email});
    const passportIsValid = await bcrypt.compare(passport, user.password);

    if(!passportIsValid) {
      throw new UnauthorizedException('Kimlik bilgileri geçersiz!');
    }

    return user;

  }


}
