import { Module } from "@nestjs/common";

import { JobsModule } from "./jobs/jobs.module";
import { AdminModule } from "./admin/admin.module";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@nestjs/core";
import { AdminOfficesModule } from "./admin/offices/admin-offices.module";
import { AdminUsersModule } from "./admin/users/admin-users.module";


@Module({
  imports: [JobsModule, AdminModule, AppRoutingModule ],
})
export class AppModule {}
