import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "../users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private readonly userService: UsersService) {
    super({
      usernameField: 'email'
    });
  }

  async validate(email: string, passport: string){
    return this.userService.validateUser(passport, email);
  }
}