export declare class MDODto {
    _id: string;
    title: string;
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class UpsertMDODto {
    _id: string;
    mdo: MDODto[];
}
