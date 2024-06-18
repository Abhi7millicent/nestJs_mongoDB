import {
  Controller,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  HttpException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AutomationScenarioService } from './automation-scenarios.service';
import {
  AutomationScenarioApiResponseDto,
  AutomationScenarioDto,
  AutomationScenarioErrorPutDto,
  AutomationScenarioErrorResponseDto,
  DeleteAutomationScenarioResponseDto,
  UpsertAutomationScenarioDataDto,
  UpsertAutomationScenarioDto,
} from './dto/automation-scenarios.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/core/decorators/http-response-handler.decorator';

@ApiTags('Automation-process')
@Controller('v1/process')
export class AutomationScenarioController {
  constructor(
    private readonly automationScenarioService: AutomationScenarioService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('automation-scenario')
  @ApiOperation({ summary: 'Post automation scenario' })
  @ApiBody({ type: UpsertAutomationScenarioDataDto })
  @ApiResponse({
    status: 201,
    description: 'AutomationScenario created successfully',
    type: AutomationScenarioApiResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to create the automation process',
    type: AutomationScenarioErrorResponseDto,
  })
  @HttpResponse()
  @HttpCode(HttpStatus.CREATED)
  async addAutomationScenario(
    @Body() createAutomationScenarioDto: UpsertAutomationScenarioDto,
  ) {
    try {
      const data =
        await this.automationScenarioService.upsertAutomationScenario(
          createAutomationScenarioDto,
        );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'AutomationScenario created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the automationScenario',
        );
      }
    }
  }

  @Put(':processId/automation-scenario-delete/:automationScenarioId')
  @ApiOperation({ summary: 'Delete Automation scenario' })
  @ApiParam({
    name: 'automationScenarioId',
    type: 'string',
    description: 'Enter automation scenario ID',
    required: true,
  })
  @ApiParam({
    name: 'processId',
    type: 'string',
    description: 'Enter process ID',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Automation scenario deleted',
    type: DeleteAutomationScenarioResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete automation scenario',
    type: AutomationScenarioErrorPutDto,
  })
  @HttpResponse()
  async updateAutomationScenarioIsDeleted(
    @Param('processId') processId: string,
    @Param('automationScenarioId') automationScenarioId: string,
  ) {
    try {
      const archiveData =
        await this.automationScenarioService.getByProcessById(processId);

      const result =
        await this.automationScenarioService.updateAutomationScenarioIsDeleted(
          processId,
          automationScenarioId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'AutomationScenario deleted successfully',
        data: {
          processId: processId,
          automationScenarioId: automationScenarioId,
        },
        // data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the automationScenario',
        );
      }
    }
  }

  // @Put(':processId/automation-scenario/:automationScenarioId')
  // async updateAutomationScenarioIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('automationScenarioId') automationScenarioId: string,
  // ) {
  //   return this.automationScenarioService.updateAutomationScenarioIsSoftDeleted(
  //     processId,
  //     automationScenarioId,
  //   );
  // }
}
