import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

declare module 'express-serve-static-core' {
  export interface Request {
    user: any;
  }
}

@Injectable()
export class GoogleService {
  constructor(private readonly jwt: JwtService) {}

  async login(req: Request, res: Response) {
    res.cookie('jwt, accessToken', {
      httpOnly: true,
      sameSite: 'lax',
    });

    return {
      success: true,
      message: 'User logged in successfully',
      data: {
        user: req.user,
      },
      authorization: {
        token: this.jwt.sign(req.user),
        type: 'bearer',
      },
    };
  }
}
