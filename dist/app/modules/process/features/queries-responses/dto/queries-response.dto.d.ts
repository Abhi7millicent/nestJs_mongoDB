export declare class QueriesResponseDto {
    _id: string;
    query: string;
    response: string;
    last_modified_by: string;
}
export declare class UpsertQueriesResponseDto {
    _id: string;
    queries_response: QueriesResponseDto[];
}
