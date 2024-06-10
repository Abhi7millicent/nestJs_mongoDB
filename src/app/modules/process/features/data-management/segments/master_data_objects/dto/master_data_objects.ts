import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class MDODto {
  _id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  last_modified_by: string;

  @IsArray()
  @IsString({ each: true })
  activity_id: string[];

  @IsBoolean()
  is_deleted: boolean;
}
