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
import { KPIsDto } from './dto/kpis.dto';

@Controller('api/process')
export class KPIsController {
  constructor(private readonly kpisService: KPIsService) {}

  @Post('kpis/:id')
  async addKPIs(@Param('id') id: string, @Body() kpisDto: KPIsDto[]) {
    return this.kpisService.addKPIs(id, kpisDto);
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
