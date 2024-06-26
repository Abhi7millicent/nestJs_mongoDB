import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DataManagementDto } from './dto/data_management_info.dto';
import { DataManagementInfoService } from './data_management_info.service';

@Controller('v1/process')
export class DataManagementInfoController {
  constructor(
    private readonly dataManagementInfoService: DataManagementInfoService,
  ) {}

  @Put(':processId/data-management-info')
  async updateIntegrationScenario(
    @Param('processId') processId: string,
    // @Param('dataManagementId') dataManagementId: string,
    dataManagementId: string,
    @Body() dataManagementDto: DataManagementDto,
  ): Promise<any> {
    return this.dataManagementInfoService.update(
      processId,
      dataManagementId,
      dataManagementDto,
    );
  }
}
