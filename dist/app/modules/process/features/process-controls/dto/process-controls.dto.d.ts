export declare class ProcessControlsDto {
    _id: string;
    title: string;
    description: string;
    activity_id: string[];
    mdo_id: string[];
    is_deleted: boolean;
    last_modified_by: string;
}
export declare class UpsertProcessControlsDto {
    _id: string;
    process_controls: ProcessControlsDto[];
}
