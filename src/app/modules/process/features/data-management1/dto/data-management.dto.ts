import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

export class TransactionVolumesDataDto {
  @IsString()
  public average_transactions_year: string;

  @IsString()
  public maximum_transactions_month: string;

  @IsString()
  public maximum_transactions_day: string;

  @IsString()
  public average_line_items: string;
}

export class DataManagementDto {
  @IsString()
  public _id: string;

  @IsString()
  public title: string[];

  @ValidateNested()
  @Type(() => TransactionVolumesDataDto)
  public transaction_volumes?: TransactionVolumesDataDto;

  @IsString()
  public data_security: string;

  @IsString()
  public data_retention: string;

  @IsString()
  public data_residency: string;

  @IsString()
  public last_modified_by: string;
}
