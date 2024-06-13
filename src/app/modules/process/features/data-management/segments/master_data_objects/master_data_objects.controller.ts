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
import { MDOService } from './master_data_objects.service';
import { MDODto, UpsertMDODto } from './dto/master_data_objects';

@Controller('v1/process')
export class MDOController {
  constructor(private readonly mdoService: MDOService) {}

  @Post('mdo')
  @HttpCode(HttpStatus.CREATED) // Setting default success status code to 201 Created
  async addMDO(@Body() createMDODto: UpsertMDODto) {
    try {
      const data = await this.mdoService.upsertMDO(createMDODto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'MDO created successfully',
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

  @Put(':processId/mdo/:mdoId')
  async updateMDOIsDeleted(
    @Param('processId') processId: string,
    @Param('mdoId') mdoId: string,
  ) {
    return this.mdoService.updateMDOIsDeleted(processId, mdoId);
  }

  @Put(':processId/mdo/:mdoId')
  async updateMDOIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('mdoId') mdoId: string,
  ) {
    return this.mdoService.updateMDOIsSoftDeleted(processId, mdoId);
  }
}
