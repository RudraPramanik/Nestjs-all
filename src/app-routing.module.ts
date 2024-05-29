import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { JOBS_ROUTES } from './jobs/jobs-routes';
import { ADMIN_ROUTES } from './admin/admin-routes';
import { CANDIDATE_ROUTE } from './candidate/candidate.routes';

const ROUTES = [...JOBS_ROUTES, ...ADMIN_ROUTES, ...CANDIDATE_ROUTE];

@Module({
  imports: [RouterModule.register(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
