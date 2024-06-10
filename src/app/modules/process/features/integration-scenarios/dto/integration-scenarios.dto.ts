// update-integration-scenario.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateIntegrationScenarioDto {
  @IsString()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  data_provider: string[];

  @IsString()
  data_consumer: string[];

  @IsString()
  api_provider: string[];

  @IsString()
  calling_system: string[];

  @IsString()
  type: string[];

  @IsString()
  data_volume_year: string[];

  @IsString()
  mode: string[];

  @IsString()
  data_type: string[];

  @IsString()
  protocol: string[];

  @IsString()
  tool: string[];

  @IsString()
  data_record_size: string;

  @IsString()
  yoy_data_growth: string;

  @IsString()
  data_provider_authentication: string;

  @IsString()
  data_consumer_authentication: string;

  @IsString()
  activity_id: string[];

  @IsString()
  mdo_id: string[];

  @IsString()
  last_modified_by: string;
}
