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
import { UpsertAuditTrailScenariosDto } from './dto/audit-trail.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';

@Controller('v1/process')
export class AuditTrailScenariosController {
  constructor(
    private readonly auditTrailScenariosService: AuditTrailScenariosService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('audit-trail-scenarios')
  @ResponseHandler()
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
        data: result,
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
