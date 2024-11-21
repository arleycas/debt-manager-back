import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export class JTWCheckMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {

    if (!req.headers['authorization']) {
      throw new BadRequestException('Debes incluir la cabecera con el token');
    }

    try {
      const token  = req.headers['authorization'];
      verify(token, process.env.SECRET_KEY_JWT);
  
      next();
    } catch (error) {
      throw new BadRequestException('Token incorrecto');
    }
    
  }
}