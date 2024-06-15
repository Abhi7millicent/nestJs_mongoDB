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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Process-controls')
@Controller('v1/process')
export class ProcessControlsController {
  constructor(
    private readonly processControlsService: ProcessControlsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('process-controls')
  @ApiOperation({ summary: 'Post process control' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '666d417093b9df8f829b22a3',
          description: 'Identifier for the activity',
        },
        process_controls: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: 'Data Quality 1',
                description: 'Title of the process control',
              },
              description: {
                type: 'string',
                example: 'Ensure the quality and consistency of incoming data.',
                description: 'Description of the process control',
              },
              activity_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'activity123',
                },
                description: 'Array of associated activities',
              },
              mdo_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'mdo456',
                },
                description: 'Array of associated MDOs (Master Data Objects)',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'process-controls created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'process-controls created successfully',
            },
            data: {
              type: 'object',
              properties: {
                created: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      title: { type: 'string', example: 'Data Quality 1' },
                      description: {
                        type: 'string',
                        example:
                          'Ensure the quality and consistency of incoming data.',
                      },
                      activity_id: {
                        type: 'array',
                        items: { type: 'string', example: 'activity123' },
                      },
                      mdo_id: {
                        type: 'array',
                        items: { type: 'string', example: 'mdo456' },
                      },
                      _id: { type: 'string', example: 'pc_64gl1z60x' },
                    },
                  },
                },
                updated: {
                  type: 'array',
                  items: { type: 'object' },
                },
              },
            },
          },
        },
        example: {
          statusCode: 201,
          success: true,
          message: 'process-controls created successfully',
          data: {
            created: [
              {
                title: 'Data Quality 1',
                description:
                  'Ensure the quality and consistency of incoming data.',
                activity_id: ['activity123', 'activity1'],
                mdo_id: ['mdo456', 'mdo345'],
                _id: 'pc_64gl1z60x',
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
    description: 'Failed to delete process control',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete process control',
            },
          },
        },
      },
    },
  })
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
  @ApiOperation({ summary: 'Delete process document' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'processControlId',
    required: true,
    description: 'Process control ID',
    example: 'pc_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Process control deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Process control deleted',
            },
            data: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6667e1246e91ff27e948a0e9',
                  description: 'Process id',
                },
                process_control_id: {
                  type: 'string',
                  example: 'pc_ruyuwn69e',
                  description: 'Process control id',
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
    description: 'Failed to delete process control',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete process control',
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
