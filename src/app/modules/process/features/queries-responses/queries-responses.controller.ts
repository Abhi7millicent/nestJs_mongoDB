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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '666d417093b9df8f829b22a3',
          description: 'Identifier for the activity',
        },
        queries_response: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                example: 'What is NestJS?',
                description: 'The query text',
              },
              response: {
                type: 'string',
                example: 'NestJS is a progressive Node.js framework.',
                description: 'The response to the query',
              },
              last_modified_by: {
                type: 'string',
                example: 'manthan',
                description: 'User who last modified the query response',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'queries-responses created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'queries-responses created successfully',
            },
            data: {
              type: 'object',
              properties: {
                created: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      query: { type: 'string', example: 'What is NestJS?' },
                      response: {
                        type: 'string',
                        example: 'NestJS is a progressive Node.js framework.',
                      },
                      _id: { type: 'string', example: 'qr_eas75e3zu' },
                    },
                  },
                },
                updated: { type: 'array', items: { type: 'object' } },
              },
            },
          },
        },
        example: {
          statusCode: 201,
          success: true,
          message: 'queries-responses created successfully',
          data: {
            created: [
              {
                query: 'What is NestJS?',
                response: 'NestJS is a progressive Node.js framework.',
                _id: 'qr_eas75e3zu',
              },
              {
                query: 'What is NestJS1?',
                response: 'NestJS is a progressive Node.js framework1.',
                _id: 'qr_6l787j054',
              },
            ],
            updated: [],
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete queries and response',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete queries and response',
            },
          },
        },
      },
    },
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
  @ApiResponse({
    status: 200,
    description: 'Queries and response deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Queries and response deleted',
            },
            data: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6667e1246e91ff27e948a0e9',
                  description: 'Process id',
                },
                queries_response_id: {
                  type: 'string',
                  example: 'qr_ruyuwn69e',
                  description: 'Queries and response id',
                },
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete queries and response',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete queries and response',
            },
          },
        },
      },
    },
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
