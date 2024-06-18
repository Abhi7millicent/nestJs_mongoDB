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
  ComplianceScenarioApiResponseDto,
  ComplianceScenarioDataDto,
  ComplianceScenarioDeleteResponseDto,
  ComplianceScenarioDto,
  ComplianceScenarioErrorResponseDto,
  DeleteComplianceScenarioResponseDto,
  UpsertComplianceScenarioDataDto,
} from './dto/compliance-scenarios-data.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/core/decorators/http-response-handler.decorator';

@ApiTags('Compliance-scenario')
@Controller('v1/process')
export class ComplianceScenariosDataController {
  constructor(
    private readonly complianceScenariosDataService: ComplianceScenariosDataService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('compliance-scenario-data')
  @ApiOperation({ summary: 'Post Compliance scenario data' })
  @ApiBody({ type: ComplianceScenarioDto })
  @ApiResponse({
    status: 201,
    description: 'ComplianceScenario created successfully',
    type: ComplianceScenarioApiResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete compliance scenario',
    type: ComplianceScenarioErrorResponseDto,
  })
  @HttpResponse()
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
  @ApiOperation({ summary: 'Delete Compliance scenario' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'complainceScenarioId',
    required: true,
    description: 'Compliance Scenarios ID',
    example: 'cs_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Compliance scenario deleted',
    type: DeleteComplianceScenarioResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete compliance scenario',
    type: ComplianceScenarioDeleteResponseDto,
  })
  @HttpResponse()
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
        data: {
          processId: processId,
          complianceScenarioDataId: complianceScenarioDataId,
        },
        // data: result,
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
