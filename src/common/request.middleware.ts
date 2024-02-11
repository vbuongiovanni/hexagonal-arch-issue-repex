import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any) {
    console.log('request.middleware.ts: req.body', req.body);
    console.log('request.middleware.ts: req.params', req.params);
    next();
  }
}
