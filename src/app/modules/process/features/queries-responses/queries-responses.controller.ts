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
import { QueriesResponsesService } from './queries-responses.service';
import {
  QueriesResponseDto,
  UpsertQueriesResponseDto,
} from './dto/queries-response.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';

@Controller('v1/process')
export class QueriesResponsesController {
  constructor(
    private readonly queriesResponsesService: QueriesResponsesService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('queries-responses')
  @ResponseHandler()
  async create(@Body() createQueriesResponseDto: UpsertQueriesResponseDto) {
    try {
      const data = await this.queriesResponsesService.Upsert(
        createQueriesResponseDto,
      );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'queries-responses created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the queries-responses',
        );
      }
    }
  }

  // @Put(':processId/queriesresponse/:qrId')
  // async updateQueriesResponse(
  //   @Param('processId') processId: string,
  //   @Param('qrId') qrId: string,
  //   @Body() workflowData: any,
  // ): Promise<any> {
  //   return this.queriesResponsesService.update(processId, qrId, workflowData);
  // }

  @Put(':processId/qr-delete/:qrId')
  @ResponseHandler()
  async updatequeriesresponseIsDeleted(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
  ) {
    try {
      const archiveData =
        await this.queriesResponsesService.getByProcessById(processId);

      const result =
        await this.queriesResponsesService.updatequeriesresponseIsDeleted(
          processId,
          qrId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'queriesResponses deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the queriesResponses',
        );
      }
    }
  }

  // @Put(':processId/qr-soft-delete/:qrId')
  // async updateQueriesResponsesIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('qrId') qrId: string,
  // ) {
  //   return this.queriesResponsesService.updateQueriesResponsesIsSoftDeleted(
  //     processId,
  //     qrId,
  //   );
  // }
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateQueriesResponseDto: QueriesResponseDto,
  // ) {
  //   return this.queriesResponsesService.update(+id, updateQueriesResponseDto);
  // }
}
