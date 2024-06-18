import { ApiProperty } from '@nestjs/swagger';

export class QueriesResponseDto {
  _id: string;
  query: string;
  response: string;
  last_modified_by: string;
}

export class UpsertQueriesResponseDto {
  public _id: string;
  public queries_response: QueriesResponseDto[] = [];
}

export class QueryResponseDto {
  @ApiProperty({ example: 'What is NestJS?' })
  query: string;

  @ApiProperty({ example: 'NestJS is a progressive Node.js framework.' })
  response: string;

  @ApiProperty({ example: 'manthan' })
  last_modified_by: string;
}

export class CreateQueryResponseDto {
  @ApiProperty({ example: '666d417093b9df8f829b22a3' })
  _id: string;

  @ApiProperty({ type: [QueryResponseDto] })
  queries_response: QueryResponseDto[];
}

export class CreatedQueryResponseDto {
  @ApiProperty({ example: 'What is NestJS?' })
  query: string;

  @ApiProperty({ example: 'NestJS is a progressive Node.js framework.' })
  response: string;

  @ApiProperty({ example: 'qr_eas75e3zu' })
  _id: string;
}

export class CreateQueryResponseResponseDto {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'queries-responses created successfully' })
  message: string;

  @ApiProperty({ type: [CreatedQueryResponseDto] })
  data: CreatedQueryResponseDto[];
}

export class DeleteQueryResponseErrorDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to create queries and response' })
  error: string;
}

export class DeleteQueryPutResponseErrorDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to delete queries and response' })
  error: string;
}

export class DeleteQueriesResponseDataDto {
  @ApiProperty({
    example: '6667e1246e91ff27e948a0e9',
    description: 'Process id',
  })
  _id: string;

  @ApiProperty({
    example: 'qr_ruyuwn69e',
    description: 'Queries and response id',
  })
  queries_response_id: string;
}

export class DeleteQueriesResponseSuccessDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Queries and response deleted' })
  message: string;

  @ApiProperty({ type: DeleteQueriesResponseDataDto })
  data: DeleteQueriesResponseDataDto;
}
