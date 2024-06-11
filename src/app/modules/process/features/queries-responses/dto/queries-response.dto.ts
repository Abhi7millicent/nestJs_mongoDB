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
