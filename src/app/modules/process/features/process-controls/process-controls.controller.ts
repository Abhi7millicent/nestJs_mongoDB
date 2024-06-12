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
import { ProcessControlsService } from './process-controls.service';
import {
  ProcessControlsDto,
  UpsertProcessControlsDto,
} from './dto/process-controls.dto';

@Controller('api/process/')
export class ProcessControlsController {
  constructor(
    private readonly processControlsService: ProcessControlsService,
  ) {}

  @Post('process-controls')
  create(@Body() upsertProcessControlsDto: UpsertProcessControlsDto) {
    return this.processControlsService.Upsert(upsertProcessControlsDto);
  }

  @Get()
  findAll() {
    return this.processControlsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processControlsService.findOne(+id);
  }

  @Put(':processId/queriesresponse/:qrId')
  async updateQueriesResponse(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
    @Body() workflowData: any,
  ): Promise<any> {
    return this.processControlsService.update(processId, qrId, workflowData);
  }

  @Put(':processId/qr-delete/:qrId')
  async updatequeriesresponseIsDeleted(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
  ) {
    return this.processControlsService.updatequeriesresponseIsDeleted(
      processId,
      qrId,
    );
  }

  @Put(':processId/qr-soft-delete/:qrId')
  async updateQueriesResponsesIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
  ) {
    return this.processControlsService.updateQueriesResponsesIsSoftDeleted(
      processId,
      qrId,
    );
  }
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProcessControlsDto: ProcessControlsDto,
  // ) {
  //   return this.processControlsService.update(+id, updateProcessControlsDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processControlsService.remove(+id);
  }
}
