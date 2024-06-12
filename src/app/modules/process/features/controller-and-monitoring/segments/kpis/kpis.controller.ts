import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { KPIsService } from './kpis.service';
import { KPIsDto, UpsertKPIsDto } from './dto/kpis.dto';

@Controller('api/process')
export class KPIsController {
  constructor(private readonly kpisService: KPIsService) {}

  @Post('kpis')
  async addKPIs(@Body() createkpisDto: UpsertKPIsDto) {
    return this.kpisService.Upsert(createkpisDto);
  }

  @Put(':processId/kpis/:kpisId')
  async updateKPIs(
    @Param('processId') processId: string,
    @Param('kpisId') kpisId: string,
    @Body() kpisDto: any,
  ): Promise<any> {
    return this.kpisService.updateKPIs(processId, kpisId, kpisDto);
  }

  @Put(':processId/kpis-delete/:kpisId')
  async updateKPIsIsDeleted(
    @Param('processId') processId: string,
    @Param('kpisId') kpisId: string,
  ) {
    return this.kpisService.updateKPIsIsDeleted(processId, kpisId);
  }

  @Put(':processId/kpis-soft-delete/:kpisId')
  async updateKPIsIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('kpisId') kpisId: string,
  ) {
    return this.kpisService.updateKPIsIsSoftDeleted(processId, kpisId);
  }
}
