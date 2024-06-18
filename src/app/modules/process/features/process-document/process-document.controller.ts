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
import { ProcessDocumentService } from './process-document.service';
import {
  ProcessDocumentDto,
  ProcessDocumentRequestBodyDto,
  ProcessDocumentResponseDto,
  UpdateProcessDocumentRequestBodyDto,
  UpdateProcessDocumentResponseBodyDto,
  UpsertProcessDocumentDto,
} from './dto/process-document.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/core/decorator/http-response-handler.decorator';

@ApiTags('Process-document')
@Controller('v1/process')
export class ProcessDocumentController {
  constructor(
    private readonly processDocumentService: ProcessDocumentService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  // @Post('process-document')
  // @ApiOperation({ summary: 'Post process document' })
  // // @ApiBody({ type: ProcessDocumentRequestBodyDto })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       _id: {
  //         type: 'string',
  //         example: '666d417093b9df8f829b22a3',
  //         description: 'Identifier for the activity',
  //       },
  //       process_document: {
  //         type: 'array',
  //         items: {
  //           type: 'object',
  //           properties: {
  //             title: {
  //               type: 'string',
  //               example: 'Sample Document Title',
  //               description: 'Title of the document',
  //             },
  //             desc: {
  //               type: 'string',
  //               example: 'This is a sample description of the document.',
  //               description: 'Description of the document',
  //             },
  //             type: {
  //               type: 'array',
  //               items: {
  //                 type: 'string',
  //                 example: 'type1',
  //               },
  //               description: 'Array of document types',
  //             },
  //             source: {
  //               type: 'array',
  //               items: {
  //                 type: 'string',
  //                 example: 'source1',
  //               },
  //               description: 'Array of document sources',
  //             },
  //             number_range: {
  //               type: 'string',
  //               example: '100-200',
  //               description: 'Range of document numbers',
  //             },
  //             storage_requirements: {
  //               type: 'string',
  //               example: 'Store in a cool, dry place',
  //               description: 'Storage requirements for the document',
  //             },
  //             attachments: {
  //               type: 'array',
  //               items: {
  //                 type: 'string',
  //                 example: 'attachment1',
  //               },
  //               description: 'Array of document attachments',
  //             },
  //             activity_id: {
  //               type: 'array',
  //               items: {
  //                 type: 'string',
  //                 example: 'activity1',
  //               },
  //               description: 'Array of associated activities',
  //             },
  //             is_deleted: {
  //               type: 'boolean',
  //               example: false,
  //               description:
  //                 'Flag indicating whether the document is deleted or not',
  //             },
  //             last_modified_by: {
  //               type: 'string',
  //               example: 'manthan',
  //               description: 'User who last modified the document',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // @ApiResponse({
  //   status: 201,
  //   description: 'process-document created successfully',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'object',
  //         properties: {
  //           statusCode: { type: 'number', example: 201 },
  //           success: { type: 'boolean', example: true },
  //           message: {
  //             type: 'string',
  //             example: 'process-document created successfully',
  //           },
  //           data: {
  //             type: 'object',
  //             properties: {
  //               created: {
  //                 type: 'array',
  //                 items: {
  //                   type: 'object',
  //                   properties: {
  //                     title: {
  //                       type: 'string',
  //                       example: 'Sample Document Title',
  //                     },
  //                     desc: {
  //                       type: 'string',
  //                       example:
  //                         'This is a sample description of the document.',
  //                     },
  //                     type: {
  //                       type: 'array',
  //                       items: { type: 'string', example: 'type1' },
  //                     },
  //                     source: {
  //                       type: 'array',
  //                       items: { type: 'string', example: 'source1' },
  //                     },
  //                     number_range: {
  //                       type: 'string',
  //                       example: '100-200',
  //                     },
  //                     storage_requirements: {
  //                       type: 'string',
  //                       example: 'Store in a cool, dry place',
  //                     },
  //                     attachments: {
  //                       type: 'array',
  //                       items: { type: 'string', example: 'attachment1' },
  //                     },
  //                     activity_id: {
  //                       type: 'array',
  //                       items: { type: 'string', example: 'activity1' },
  //                     },
  //                     is_deleted: { type: 'boolean', example: false },
  //                     _id: { type: 'string', example: 'pd_kuclxi9j6' },
  //                   },
  //                 },
  //               },
  //               updated: {
  //                 type: 'array',
  //                 items: { type: 'object' },
  //               },
  //             },
  //           },
  //         },
  //       },
  //       example: {
  //         statusCode: 201,
  //         success: true,
  //         message: 'process-document created successfully',
  //         data: {
  //           created: [
  //             {
  //               title: 'Sample Document Title',
  //               desc: 'This is a sample description of the document.',
  //               type: ['type1', 'type2'],
  //               source: ['source1', 'source2'],
  //               number_range: '100-200',
  //               storage_requirements: 'Store in a cool, dry place',
  //               attachments: ['attachment1', 'attachment2'],
  //               activity_id: ['activity1', 'activity2'],
  //               is_deleted: false,
  //               _id: 'pd_kuclxi9j6',
  //             },
  //           ],
  //           updated: [],
  //         },
  //       },
  //     },
  //   },
  // })
  // @ApiResponse({
  //   status: 500,
  //   description: 'Failed to delete process document',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'object',
  //         properties: {
  //           statusCode: { type: 'number', example: 500 },
  //           success: { type: 'boolean', example: false },
  //           error: {
  //             type: 'string',
  //             example: 'Failed to delete process document',
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // @ResponseHandler()
  // async create(@Body() createProcessDocumentDto: UpsertProcessDocumentDto) {
  //   try {
  //     const data = await this.processDocumentService.upsert(
  //       createProcessDocumentDto,
  //     );
  //     return {
  //       statusCode: HttpStatus.CREATED,
  //       success: true,
  //       message: 'process-document created successfully',
  //       data: data,
  //     };
  //   } catch (error) {
  //     if (error instanceof NotFoundException) {
  //       throw new NotFoundException(error.message);
  //     } else if (error instanceof BadRequestException) {
  //       throw new BadRequestException(error.message);
  //     } else {
  //       throw new InternalServerErrorException(
  //         'Failed to create the process-document',
  //       );
  //     }
  //   }
  // }

  @Post('process-document')
  @ApiOperation({ summary: 'Post process document' })
  @ApiBody({ type: ProcessDocumentRequestBodyDto })
  @ApiResponse({
    status: 201,
    description: 'process-document created successfully',
    type: ProcessDocumentResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete process document',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete process document',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  async create(
    @Body() createProcessDocumentDto: ProcessDocumentRequestBodyDto,
  ) {
    try {
      const data = await this.processDocumentService.upsert(
        createProcessDocumentDto,
      );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'process-document created successfully',
        data,
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to create the process document',
      );
    }
  }

  // @Get()
  // findAll() {
  //   return this.processDocumentService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.processDocumentService.findOne(+id);
  // }

  // @Put(':processId/processdocument/:pdId')
  // async updateProcessDocument(
  //   @Param('processId') processId: string,
  //   @Param('pdId') pdId: string,
  //   @Body() processDocumentData: any,
  // ): Promise<any> {
  //   return this.processDocumentService.updateProcessDocument(
  //     processId,
  //     pdId,
  //     processDocumentData,
  //   );
  // }

  // @Put(':processId/pd-delete/:pdId')
  // @ApiOperation({ summary: 'Delete process document' })
  // @ApiParam({
  //   name: 'processId',
  //   required: true,
  //   description: 'Process ID',
  //   example: '6667e1246e91ff27e948a0e9',
  // })
  // @ApiParam({
  //   name: 'processDocumentId',
  //   required: true,
  //   description: 'Process document ID',
  //   example: 'pd_ruyuwn69e',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Process document deleted',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'object',
  //         properties: {
  //           statusCode: { type: 'number', example: 200 },
  //           success: { type: 'boolean', example: true },
  //           message: {
  //             type: 'string',
  //             example: 'Process document deleted',
  //           },
  //           data: {
  //             type: 'object',
  //             properties: {
  //               _id: {
  //                 type: 'string',
  //                 example: '6667e1246e91ff27e948a0e9',
  //                 description: 'Process id',
  //               },
  //               process_document_id: {
  //                 type: 'string',
  //                 example: 'pd_ruyuwn69e',
  //                 description: 'Process document id',
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // @ApiResponse({
  //   status: 500,
  //   description: 'Failed to delete audit trail',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'object',
  //         properties: {
  //           statusCode: { type: 'number', example: 500 },
  //           success: { type: 'boolean', example: false },
  //           error: {
  //             type: 'string',
  //             example: 'Failed to delete audit trail',
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // @ResponseHandler()
  // async updateProcessDocumentIsDeleted(
  //   @Param('processId') processId: string,
  //   @Param('pdId') pdId: string,
  // ) {
  //   try {
  //     const archiveData =
  //       await this.processDocumentService.getByProcessById(processId);

  //     const result =
  //       await this.processDocumentService.updateProcessDocumentIsDeleted(
  //         processId,
  //         pdId,
  //       );

  //     if (result) {
  //       const data = await this.processArchiveService.create(archiveData);
  //       console.log('object:', data);
  //     }

  //     return {
  //       statusCode: HttpStatus.OK,
  //       message: 'processDocument deleted successfully',
  //       data: {
  //         processId: processId,
  //         pdId: pdId,
  //       },
  //       // data: result,
  //     };
  //   } catch (error) {
  //     if (error instanceof NotFoundException) {
  //       throw new NotFoundException(error.message);
  //     } else {
  //       throw new InternalServerErrorException(
  //         'Failed to delete the processDocument',
  //       );
  //     }
  //   }
  // }

  @Put(':processId/pd-delete/:pdId')
  @ApiOperation({ summary: 'Delete process document' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'processDocumentId',
    required: true,
    description: 'Process document ID',
    example: 'pd_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Process document deleted',
    type: UpdateProcessDocumentResponseBodyDto, // Using the response DTO
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete audit trail',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete audit trail',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  async updateProcessDocumentIsDeleted(
    @Param() params: UpdateProcessDocumentRequestBodyDto, // Using the request body DTO
  ) {
    try {
      const archiveData = await this.processDocumentService.getByProcessById(
        params.processId,
      );

      const result =
        await this.processDocumentService.updateProcessDocumentIsDeleted(
          params.processId,
          params.pdId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'processDocument deleted successfully',
        data: {
          processId: params.processId,
          pdId: params.pdId,
        },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the processDocument',
        );
      }
    }
  }

  // @Put(':processId/pd-soft-delete/:pdId')
  // async updateProcessDocumentsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('pdId') pdId: string,
  // ) {
  //   return this.processDocumentService.updateProcessDocumentsIsSoftDeleted(
  //     processId,
  //     pdId,
  //   );
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.processDocumentService.remove(+id);
  // }
}
