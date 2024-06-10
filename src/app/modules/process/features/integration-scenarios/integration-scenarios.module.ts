import { Module } from '@nestjs/common';
import { ProcessRepository } from '../../process.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';
import { IntegrationScenarioController } from './integration-scenarios.controller';
import { IntegrationScenarioService } from './integration-scenarios.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [IntegrationScenarioController],
  providers: [IntegrationScenarioService, ProcessRepository],
})
export class IntegrationScenarioModule {}
