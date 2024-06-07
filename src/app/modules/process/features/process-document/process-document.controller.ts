import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProcessDocumentService } from './process-document.service';
import { ProcessDocumentDto } from './dto/process-document.dto';

@Controller('process-document')
export class ProcessDocumentController {
  constructor(
    private readonly processDocumentService: ProcessDocumentService,
  ) { }

  @Post('/:id')
  create(
    @Param('id') id: string,
    @Body() createProcessDocumentDto: ProcessDocumentDto,
  ) {
    return this.processDocumentService.create(id, createProcessDocumentDto);
  }

  @Get()
  findAll() {
    return this.processDocumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processDocumentService.findOne(+id);
  }

  @Put(':processId/processdocument/:pdId')
  async updateProcessDocument(
    @Param('processId') processId: string,
    @Param('pdId') pdId: string,
    @Body() processDocumentData: any,
  ): Promise<any> {
    return this.processDocumentService.updateProcessDocument(
      processId,
      pdId,
      processDocumentData,
    );
  }

  @Put(':processId/pd-delete/:pdId')
  async updateProcessDocumentIsDeleted(
    @Param('processId') processId: string,
    @Param('pdId') pdId: string,
  ) {
    return this.processDocumentService.updateProcessDocumentIsDeleted(
      processId,
      pdId,
    );
  }

  @Put(':processId/pd-soft-delete/:pdId')
  async updateProcessDocumentsIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('pdId') pdId: string,
  ) {
    return this.processDocumentService.updateProcessDocumentsIsSoftDeleted(
      processId,
      pdId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processDocumentService.remove(+id);
  }
}
