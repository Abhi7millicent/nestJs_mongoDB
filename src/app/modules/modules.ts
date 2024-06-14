import { Module } from '@nestjs/common';
import { ProcessModule } from './process/process.module';
import { RolesModule } from './role/role.module';
import { ArchiveModule } from './archive/archive.module';

@Module({
  imports: [ProcessModule, RolesModule, ArchiveModule],
})
export class Modules {}
