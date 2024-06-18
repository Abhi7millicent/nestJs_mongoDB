export declare class ProcessDocumentDto {
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
export declare class UpsertProcessDocumentDto {
    _id: string;
    process_document: ProcessDocumentDto[];
}
export declare class ProcessDocumentItemDto {
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
export declare class ProcessDocumentRequestBodyDto {
    _id: string;
    process_document: ProcessDocumentItemDto[];
}
export declare class ProcessDocumentDataDto {
    created: ProcessDocumentItemDto[];
    updated: any[];
}
export declare class ProcessDocumentResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: ProcessDocumentDataDto;
}
export declare class UpdateProcessDocumentRequestBodyDto {
    processId: string;
    pdId: string;
}
export declare class UpdateProcessDocumentResponseBodyDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        processId: string;
        process_document_id: string;
    };
}
