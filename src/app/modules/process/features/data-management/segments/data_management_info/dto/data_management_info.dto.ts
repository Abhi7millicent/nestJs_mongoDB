import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DataManagementDto {
  _id: string;

  @IsString()
  average_transactions: string;

  @IsString()
  maximum_transactions_month: string;

  @IsString()
  maximum_transactions_day: string;

  @IsString()
  average_line_items: string;

  @IsString()
  data_security: string;

  @IsString()
  data_retention: string;

  @IsString()
  data_residency: string;

  @IsString()
  last_modified_by: string;

  @IsArray()
  @IsString({ each: true })
  activity_id: string[];
}
