import { Module } from '@nestjs/common';
import { candidateController } from './controllers/candidate.controller';
import { premiumCandidateController } from './controllers/candidate-premium.controller';

@Module({
  controllers: [candidateController, premiumCandidateController],
})
export class CandidateModule {}
