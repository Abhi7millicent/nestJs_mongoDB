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
  CreateQueryResponseDto,
  CreateQueryResponseResponseDto,
  DeleteQueriesResponseSuccessDto,
  DeleteQueryPutResponseErrorDto,
  DeleteQueryResponseErrorDto,
  QueriesResponseDto,
  UpsertQueriesResponseDto,
} from './dto/queries-response.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Queries-responses')
@Controller('v1/process')
export class QueriesResponsesController {
  constructor(
    private readonly queriesResponsesService: QueriesResponsesService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('queries-responses')
  @ApiOperation({ summary: 'Post queries and response' })
  @ApiBody({ type: CreateQueryResponseDto })
  @ApiResponse({ status: 201, type: CreateQueryResponseResponseDto })
  @ApiResponse({
    status: 500,
    description: 'Failed to create queries and response',
    type: DeleteQueryResponseErrorDto,
  })
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
  @ApiOperation({ summary: 'Delete queries and response' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'quriesResponseId',
    required: true,
    description: 'Queries and response ID',
    example: 'qr_ruyuwn69e',
  })
  @ApiResponse({ status: 201, type: DeleteQueriesResponseSuccessDto })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete queries and response',
    type: DeleteQueryPutResponseErrorDto,
  })
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
        data: {
          processId: processId,
          qrId: qrId,
        },
        // data: result,
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
