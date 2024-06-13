import { Module } from '@nestjs/common';
import { MDOModule } from './segments/master_data_objects/master_data_objects.module';
import { DataManagementInfoModule } from './segments/data_management_info/data_management_info.module';

@Module({
  imports: [DataManagementInfoModule, MDOModule],
})
export class DataManagement1Module {}
