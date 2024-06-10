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
import { AutomationScenarioDto } from './dto/automation-scenarios.dto';

@Controller('api/process')
export class AutomationScenarioController {
  constructor(
    private readonly automationScenarioService: AutomationScenarioService,
  ) {}

  @Post('automation-scenario/:id')
  @HttpCode(HttpStatus.CREATED) // Setting default success status code to 201 Created
  async addAutomationScenario(
    @Param('id') id: string,
    @Body() automationScenarioDto: AutomationScenarioDto[],
  ) {
    try {
      const data = await this.automationScenarioService.addAutomationScenario(
        id,
        automationScenarioDto,
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
