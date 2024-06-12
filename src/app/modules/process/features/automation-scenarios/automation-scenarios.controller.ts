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

  @Post('automation-scenario/:id')
  @HttpCode(HttpStatus.CREATED) // Setting default success status code to 201 Created
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
      // Handle specific known errors
      if (error instanceof NotFoundException) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: error.message,
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        // Handle unexpected errors
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
