import { Controller, Get } from '@nestjs/common';

@Controller('/candidates')
export class candidateController {
  @Get()
  requestHandler() {
    return 'Job candidate route';
  }
}
