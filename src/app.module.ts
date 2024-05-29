import { Module } from '@nestjs/common';

import { JobsModule } from './jobs/jobs.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@nestjs/core';
import { AdminOfficesModule } from './admin/offices/admin-offices.module';
import { AdminUsersModule } from './admin/users/admin-users.module';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [JobsModule, AdminModule, AppRoutingModule, CandidateModule],
})
export class AppModule {}
