import { Controller, Post, Response, Request } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post()
  reply(@Request() req, @Response() response) {
    response.set('Content-Type', 'text/xml');
    const message = this.smsService.reply(req);
    response.send(message);
  }
}
