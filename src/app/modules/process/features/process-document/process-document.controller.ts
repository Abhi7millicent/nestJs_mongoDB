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
  UpsertProcessDocumentDto,
} from './dto/process-document.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';

@Controller('v1/process')
export class ProcessDocumentController {
  constructor(
    private readonly processDocumentService: ProcessDocumentService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('process-document')
  @ResponseHandler()
  async create(@Body() createProcessDocumentDto: UpsertProcessDocumentDto) {
    try {
      const data = await this.processDocumentService.upsert(
        createProcessDocumentDto,
      );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'process-document created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the process-document',
        );
      }
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

  @Put(':processId/pd-delete/:pdId')
  @ResponseHandler()
  async updateProcessDocumentIsDeleted(
    @Param('processId') processId: string,
    @Param('pdId') pdId: string,
  ) {
    try {
      const archiveData =
        await this.processDocumentService.getByProcessById(processId);

      const result =
        await this.processDocumentService.updateProcessDocumentIsDeleted(
          processId,
          pdId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'processDocument deleted successfully',
        data: result,
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
