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
  AutomationScenarioDto,
  UpsertAutomationScenarioDto,
} from './dto/automation-scenarios.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';

@Controller('v1/process')
export class AutomationScenarioController {
  constructor(
    private readonly automationScenarioService: AutomationScenarioService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('automation-scenario')
  @ResponseHandler()
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
  @ResponseHandler()
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
        data: result,
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
