import { GoogleStrategy } from './strategy/google.strategy';
import { Module } from '@nestjs/common';
import { GoogleService } from './google/google.service';
import { AppleService } from './apple/apple.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import auth from '../services/auth.service';
import { JwtService } from '@nestjs/jwt/dist';

@Module({
  imports: [
    JwtModule.register({
      secret: auth.jwt.secret,
      signOptions: {
        expiresIn: auth.jwt.signOptions.expiresIn,
      },
    }),
  ],
  providers: [GoogleService, AppleService, GoogleStrategy, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
