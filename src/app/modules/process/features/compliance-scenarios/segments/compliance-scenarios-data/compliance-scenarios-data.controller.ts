import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ComplianceScenariosDataService } from './compliance-scenarios-data.service';
import {
  ComplianceScenarioDataDto,
  UpsertComplianceScenarioDataDto,
} from './dto/compliance-scenarios-data.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';

@Controller('v1/process')
export class ComplianceScenariosDataController {
  constructor(
    private readonly complianceScenariosDataService: ComplianceScenariosDataService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('compliance-scenario-data')
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addComplianceScenariosData(
    @Body() createComplianceScenarioDataDto: UpsertComplianceScenarioDataDto,
  ) {
    try {
      const data =
        await this.complianceScenariosDataService.upsertComplianceScenariosData(
          createComplianceScenarioDataDto,
        );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'ComplianceScenario created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the ComplianceScenario',
        );
      }
    }
  }

  // @Put(':processId/compliance-scenario-data/:complianceScenarioDataId')
  // async updateComplianceScenariosData(
  //   @Param('processId') processId: string,
  //   @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  //   @Body() complianceScenarioDataDto: any,
  // ): Promise<any> {
  //   return this.complianceScenariosDataService.updateComplianceScenariosData(
  //     processId,
  //     complianceScenarioDataId,
  //     complianceScenarioDataDto,
  //   );
  // }

  @Put(':processId/compliance-scenario-data-delete/:complianceScenarioDataId')
  @ResponseHandler()
  async updateComplianceScenariosDataIsDeleted(
    @Param('processId') processId: string,
    @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  ) {
    try {
      const archiveData =
        await this.complianceScenariosDataService.getByProcessById(processId);

      const result =
        await this.complianceScenariosDataService.updateComplianceScenariosDataIsDeleted(
          processId,
          complianceScenarioDataId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'ComplianceScenarios deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the ComplianceScenarios',
        );
      }
    }
  }

  // @Put(
  //   ':processId/compliance-scenario-data-soft-delete/:complianceScenarioDataId',
  // )
  // async updateComplianceScenariosDataIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  // ) {
  //   return this.complianceScenariosDataService.updateComplianceScenariosDataIsSoftDeleted(
  //     processId,
  //     complianceScenarioDataId,
  //   );
  // }
}
