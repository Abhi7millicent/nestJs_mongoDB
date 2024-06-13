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
} from '@nestjs/common';
import { AutomationScenarioService } from './automation-scenarios.service';
import {
  AutomationScenarioDto,
  UpsertAutomationScenarioDto,
} from './dto/automation-scenarios.dto';

@Controller('v1/process')
export class AutomationScenarioController {
  constructor(
    private readonly automationScenarioService: AutomationScenarioService,
  ) {}

  @Post('automation-scenario')
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
        message: 'AutomationScenario created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: error.message,
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Put(':processId/automation-scenario/:automationScenarioId')
  async updateAutomationScenarioIsDeleted(
    @Param('processId') processId: string,
    @Param('automationScenarioId') automationScenarioId: string,
  ) {
    return this.automationScenarioService.updateAutomationScenarioIsDeleted(
      processId,
      automationScenarioId,
    );
  }

  @Put(':processId/automation-scenario/:automationScenarioId')
  async updateAutomationScenarioIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('automationScenarioId') automationScenarioId: string,
  ) {
    return this.automationScenarioService.updateAutomationScenarioIsSoftDeleted(
      processId,
      automationScenarioId,
    );
  }
}
