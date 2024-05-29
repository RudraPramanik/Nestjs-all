import { Controller, Get } from '@nestjs/common';

@Controller('/premium-candidates')
export class premiumCandidateController {
  @Get()
  requestHandler() {
    return 'Job candidate route';
  }
}
