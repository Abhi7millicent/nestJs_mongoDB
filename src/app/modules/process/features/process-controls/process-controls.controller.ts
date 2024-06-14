import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Put,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProcessControlsService } from './process-controls.service';
import {
  ProcessControlsDto,
  UpsertProcessControlsDto,
} from './dto/process-controls.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';

@Controller('v1/process')
export class ProcessControlsController {
  constructor(
    private readonly processControlsService: ProcessControlsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('process-controls')
  @ResponseHandler()
  async create(@Body() upsertProcessControlsDto: UpsertProcessControlsDto) {
    try {
      const data = await this.processControlsService.upsert(
        upsertProcessControlsDto,
      );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'process-controls created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the process-controls',
        );
      }
    }
  }

  // @Get()
  // findAll() {
  //   return this.processControlsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.processControlsService.findOne(+id);
  // }

  // @Put(':processId/process-controls-update/:qrId')
  // async updateQueriesResponse(
  //   @Param('processId') processId: string,
  //   @Param('qrId') qrId: string,
  //   @Body() workflowData: any,
  // ): Promise<any> {
  //   return this.processControlsService.update(processId, qrId, workflowData);
  // }

  @Put(':processId/process-controls-delete/:qrId')
  @ResponseHandler()
  async updatequeriesresponseIsDeleted(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
  ) {
    try {
      const archiveData =
        await this.processControlsService.getByProcessById(processId);

      const result =
        await this.processControlsService.updatequeriesresponseIsDeleted(
          processId,
          qrId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'processArchive deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the processArchive',
        );
      }
    }
  }

  // @Put(':processId/process-controls/:qrId')
  // async updateQueriesResponsesIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('qrId') qrId: string,
  // ) {
  //   return this.processControlsService.updateQueriesResponsesIsSoftDeleted(
  //     processId,
  //     qrId,
  //   );
  // }
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProcessControlsDto: ProcessControlsDto,
  // ) {
  //   return this.processControlsService.update(+id, updateProcessControlsDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.processControlsService.remove(+id);
  // }
}
