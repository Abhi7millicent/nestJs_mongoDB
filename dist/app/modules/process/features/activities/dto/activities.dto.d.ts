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
export declare class CreateActivityDto {
    _id: string;
    ActivityDto: ActivityDto[];
}
