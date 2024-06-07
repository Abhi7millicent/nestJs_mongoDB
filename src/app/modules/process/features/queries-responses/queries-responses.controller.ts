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
import { QueriesResponsesService } from './queries-responses.service';
import { QueriesResponseDto } from './dto/queries-response.dto';

@Controller('api/process/')
export class QueriesResponsesController {
  constructor(
    private readonly queriesResponsesService: QueriesResponsesService,
  ) { }

  @Post('queries-responses/:id')
  create(
    @Param('id') id: string,
    @Body() queriesResponseDto: QueriesResponseDto,
  ) {
    return this.queriesResponsesService.create(id, queriesResponseDto);
  }

  @Get()
  findAll() {
    return this.queriesResponsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queriesResponsesService.findOne(+id);
  }

  @Put(':processId/queriesresponse/:qrId')
  async updateQueriesResponse(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
    @Body() workflowData: any,
  ): Promise<any> {
    return this.queriesResponsesService.update(processId, qrId, workflowData);
  }

  @Put(':processId/qr-delete/:qrId')
  async updatequeriesresponseIsDeleted(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
  ) {
    return this.queriesResponsesService.updatequeriesresponseIsDeleted(
      processId,
      qrId,
    );
  }

  @Put(':processId/qr-soft-delete/:qrId')
  async updateQueriesResponsesIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('qrId') qrId: string,
  ) {
    return this.queriesResponsesService.updateQueriesResponsesIsSoftDeleted(
      processId,
      qrId,
    );
  }
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateQueriesResponseDto: QueriesResponseDto,
  // ) {
  //   return this.queriesResponsesService.update(+id, updateQueriesResponseDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queriesResponsesService.remove(+id);
  }
}
