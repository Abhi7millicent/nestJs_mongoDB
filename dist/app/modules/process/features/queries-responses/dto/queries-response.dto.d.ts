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
export declare class QueryResponseDto {
    query: string;
    response: string;
    last_modified_by: string;
}
export declare class CreateQueryResponseDto {
    _id: string;
    queries_response: QueryResponseDto[];
}
export declare class CreatedQueryResponseDto {
    query: string;
    response: string;
    _id: string;
}
export declare class CreateQueryResponseResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: CreatedQueryResponseDto[];
}
export declare class DeleteQueryResponseErrorDto {
    statusCode: number;
    success: boolean;
    error: string;
}
export declare class DeleteQueryPutResponseErrorDto {
    statusCode: number;
    success: boolean;
    error: string;
}
export declare class DeleteQueriesResponseDataDto {
    _id: string;
    queries_response_id: string;
}
export declare class DeleteQueriesResponseSuccessDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: DeleteQueriesResponseDataDto;
}
