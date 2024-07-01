import { Injectable, Request } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { MessagingResponse } = require('twilio').twiml;

@Injectable()
export class SmsService {
  reply(@Request() req) {
    const twiml = new MessagingResponse();
    console.log(req.body);

    twiml.message('Hello from the Webhook');

    return twiml.toString();
  }
}
