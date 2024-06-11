import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';
import { ProcessRepository } from '../../process.repository';
import { AutomationScenarioService } from './automation-scenarios.service';
import { AutomationScenarioController } from './automation-scenarios.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [AutomationScenarioController],
  providers: [AutomationScenarioService, ProcessRepository],
})
export class AutomationScenarioModule {}
