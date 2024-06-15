export declare class TransactionVolumesDataDto {
    average_transactions_year: string;
    maximum_transactions_month: string;
    maximum_transactions_day: string;
    average_line_items: string;
}
export declare class DataManagementDto {
    _id: string;
    mdo: string[];
    transaction_volumes?: TransactionVolumesDataDto;
    data_security: string;
    data_retention: string;
    data_residency: string;
    last_modified_by: string;
}
