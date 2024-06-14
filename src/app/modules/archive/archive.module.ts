import { Module } from '@nestjs/common';
import { ProcessArchiveModule } from './process-archive/process-archive.module';

@Module({
  imports: [ProcessArchiveModule],
})
export class ArchiveModule {}
