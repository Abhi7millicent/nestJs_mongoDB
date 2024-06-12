import { Module } from '@nestjs/common';
import { ProcessModule } from './process/process.module';
import { RolesModule } from './role/role.module';

@Module({
  imports: [ProcessModule, RolesModule],
})
export class Modules {}
