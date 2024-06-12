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
import {
  QueriesResponseDto,
  UpsertQueriesResponseDto,
} from './dto/queries-response.dto';

@Controller('v1/process')
export class QueriesResponsesController {
  constructor(
    private readonly queriesResponsesService: QueriesResponsesService,
  ) {}

  @Post('queries-responses')
  create(@Body() createQueriesResponseDto: UpsertQueriesResponseDto) {
    return this.queriesResponsesService.Upsert(createQueriesResponseDto);
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
}
