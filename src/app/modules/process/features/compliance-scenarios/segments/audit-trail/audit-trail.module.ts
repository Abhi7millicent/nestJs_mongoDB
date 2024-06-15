import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { Process, ProcessSchema } from 'src/app/modules/process/process.schema';
import { AuditTrailScenariosController } from './audit-trail.controller';
import { AuditTrailScenariosService } from './audit-trail.service';
import { ProcessArchiveModule } from 'src/app/modules/archive/process-archive/process-archive.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
    ProcessArchiveModule,
  ],
  controllers: [AuditTrailScenariosController],
  providers: [AuditTrailScenariosService, ProcessRepository],
})
export class AuditTrailScenariosModule {}
