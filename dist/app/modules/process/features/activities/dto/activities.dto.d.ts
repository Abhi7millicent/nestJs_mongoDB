export declare class ActivityDto {
    _id: string;
    sr_no: string;
    description: string;
    performed_at: string[];
    performed_by: string[];
    performed_where: string[];
    value_calculation_logic: string;
    accounts_postings: string;
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class UpsertActivityDto {
    _id: string;
    activity: ActivityDto[];
}
export declare class ActivityDataDto {
    _id: string;
    sr_no: string;
    description: string;
    performed_at: string[];
    performed_by: string[];
    performed_where: string[];
    value_calculation_logic: string;
    accounts_postings: string;
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class CreateActivityDto {
    _id: string;
    activity: ActivityDataDto[];
}
export declare class CreateActivityResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        created: ActivityDataDto[];
        updated: any[];
    };
}
export declare class ErrorResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
}
declare class ActivityDeletedDataDto {
    _id: string;
    activity_id: string;
}
export declare class ActivityDeletedResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: ActivityDeletedDataDto;
}
export declare class ErrorResponsePutDto {
    statusCode: number;
    success: boolean;
    message: string;
}
export {};
