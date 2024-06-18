import { ApiProperty } from '@nestjs/swagger';

export class ProcessDocumentDto {
  _id: string;
  title: string;
  desc: string;
  type: string[];
  source: string[];
  number_range: string;
  storage_requirements: string;
  attachments: string[];
  activity_id: string[];
  is_deleted: boolean;
  last_modified_by: string;
}

export class UpsertProcessDocumentDto {
  public _id: string;
  public process_document: ProcessDocumentDto[] = [];
}

export class ProcessDocumentItemDto {
  @ApiProperty({
    description: 'Identifier for the activity',
    example: '666d417093b9df8f829b22a3',
  })
  _id: string;

  @ApiProperty({
    description: 'Title of the document',
    example: 'Sample Document Title',
  })
  title: string;

  @ApiProperty({
    description: 'Description of the document',
    example: 'This is a sample description of the document.',
  })
  desc: string;

  @ApiProperty({ description: 'Array of document types', example: ['type1'] })
  type: string[];

  @ApiProperty({
    description: 'Array of document sources',
    example: ['source1'],
  })
  source: string[];

  @ApiProperty({ description: 'Range of document numbers', example: '100-200' })
  number_range: string;

  @ApiProperty({
    description: 'Storage requirements for the document',
    example: 'Store in a cool, dry place',
  })
  storage_requirements: string;

  @ApiProperty({
    description: 'Array of document attachments',
    example: ['attachment1'],
  })
  attachments: string[];

  @ApiProperty({
    description: 'Array of associated activities',
    example: ['activity1'],
  })
  activity_id: string[];

  @ApiProperty({
    description: 'Flag indicating whether the document is deleted or not',
    example: false,
  })
  is_deleted: boolean;

  @ApiProperty({
    description: 'User who last modified the document',
    example: 'manthan',
  })
  last_modified_by: string;
}

export class ProcessDocumentRequestBodyDto {
  @ApiProperty({
    description: 'Identifier for the activity',
    example: '666d417093b9df8f829b22a3',
  })
  _id: string;

  @ApiProperty()
  process_document: ProcessDocumentItemDto[];
}

export class ProcessDocumentDataDto {
  @ApiProperty({ description: 'List of created documents' })
  created: ProcessDocumentItemDto[];

  @ApiProperty({ description: 'List of updated documents' })
  updated: any[]; // Adjust this type based on the actual response data
}

export class ProcessDocumentResponseDto {
  @ApiProperty({ description: 'HTTP status code', example: 201 })
  statusCode: number;

  @ApiProperty({
    description: 'Flag indicating the success of the operation',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Message describing the result of the operation',
    example: 'process-document created successfully',
  })
  message: string;

  @ApiProperty({ description: 'Data returned from the operation' })
  data: ProcessDocumentDataDto;
}

export class UpdateProcessDocumentRequestBodyDto {
  @ApiProperty({
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  processId: string;

  @ApiProperty({
    description: 'Process document ID',
    example: 'pd_ruyuwn69e',
  })
  pdId: string;
}

export class UpdateProcessDocumentResponseBodyDto {
  @ApiProperty({ description: 'HTTP status code', example: 200 })
  statusCode: number;

  @ApiProperty({
    description: 'Flag indicating the success of the operation',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Message describing the result of the operation',
    example: 'Process document deleted',
  })
  message: string;

  @ApiProperty({ description: 'Data returned from the operation' })
  data: {
    processId: string;
    process_document_id: string;
  };
}
