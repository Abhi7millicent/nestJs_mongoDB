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
import { AuditTrailScenariosService } from './audit-trail.service';
import {
  ApiResponseDto,
  AuditTrailDto,
  // AuditTrailScenarioDto,
  CreateAuditTrailErrorResponseDto,
  DeleteAuditTrailErrorResponseDto,
  DeleteAuditTrailResponseDto,
  UpsertAuditTrailScenariosDto,
} from './dto/audit-trail.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/core/decorators/http-response-handler.decorator';

@ApiTags('Audit-trail')
@Controller('v1/process')
export class AuditTrailScenariosController {
  constructor(
    private readonly auditTrailScenariosService: AuditTrailScenariosService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('audit-trail-scenarios')
  @ApiOperation({ summary: 'Post Audit trail' })
  @ApiBody({ type: AuditTrailDto })
  @ApiResponse({
    status: 201,
    description: 'Audit trail created',
    type: ApiResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to create audit trail',
    type: CreateAuditTrailErrorResponseDto,
  })
  @HttpResponse()
  @HttpCode(HttpStatus.CREATED)
  async upsertAuditTrailScenarios(
    @Body() createAuditTrailScenariosDto: UpsertAuditTrailScenariosDto,
  ) {
    try {
      const data =
        await this.auditTrailScenariosService.upsertAuditTrailScenarios(
          createAuditTrailScenariosDto,
        );

      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'AuditTrailScenarios created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the AuditTrailScenarios',
        );
      }
    }
  }

  // @Put(':processId/audit-trail-scenarios/:auditTrailScenariosId')
  // async updateWorkflow(
  //   @Param('processId') processId: string,
  //   @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  //   @Body() auditTrailScenariosDto: any,
  // ): Promise<any> {
  //   return this.auditTrailScenariosService.updateAuditTrailScenarios(
  //     processId,
  //     auditTrailScenariosId,
  //     auditTrailScenariosDto,
  //   );
  // }

  @Put(':processId/audit-trail-scenarios-delete/:auditTrailScenariosId')
  @ApiOperation({ summary: 'Delete Audit trail' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'auditTrailScenariosId',
    required: true,
    description: 'Audit Trail Scenarios ID',
    example: 'at_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Audit trail deleted',
    type: DeleteAuditTrailResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete audit trail',
    type: DeleteAuditTrailErrorResponseDto,
  })
  @HttpResponse()
  async updateWorkflowsIsDeleted(
    @Param('processId') processId: string,
    @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  ) {
    try {
      const archiveData =
        await this.auditTrailScenariosService.getByProcessById(processId);

      const result =
        await this.auditTrailScenariosService.updateAuditTrailScenariosIsDeleted(
          processId,
          auditTrailScenariosId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'AuditTrailScenarios deleted successfully',
        data: {
          processId: processId,
          auditTrailScenariosId: auditTrailScenariosId,
        },
        // data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the AuditTrailScenarios',
        );
      }
    }
  }

  // @Put(':processId/audit-trail-scenarios-soft-delete/:auditTrailScenariosId')
  // async updateWorkflowsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  // ) {
  //   return this.auditTrailScenariosService.updateAuditTrailScenariosIsSoftDeleted(
  //     processId,
  //     auditTrailScenariosId,
  //   );
  // }
}
