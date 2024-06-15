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
import { DataManagementDto } from './dto/data-management.dto';
import { DataManagementService } from './data-management.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Data-management')
@Controller('v1/process')
export class DataManagementController {
  constructor(private readonly dataManagementService: DataManagementService) {}

  @Put(':processId/data-management')
  async updateIntegrationScenario(
    @Param('processId') processId: string,
    dataManagementId: string,
    @Body() dataManagementDto: DataManagementDto,
  ): Promise<any> {
    return this.dataManagementService.update(
      processId,
      dataManagementId,
      dataManagementDto,
    );
  }
}
