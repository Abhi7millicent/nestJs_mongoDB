export declare class KPIsDto {
    _id: string;
    title: string;
    description: string;
    calculation_logic: string;
    complexity_level: string[];
    role: string[];
    activity_id: string[];
    value: string[];
    bench_mark: string;
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class UpsertKPIsDto {
    _id: string;
    kpis: KPIsDto[];
}
export declare class kpisData {
    title: string;
    description: string;
    calculation_logic: string;
    complexity_level: string[];
    role: string[];
    activity_id: string[];
    value: string[];
    bench_mark: string;
    last_modified_by: string;
}
export declare class UpsertKPIsDataDto {
    _id: string;
    kpis: kpisData[];
}
export declare class KPIsResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        created: {
            title: string;
            description: string;
            calculation_logic: string;
            complexity_level: string[];
            role: string[];
            activity_id: string[];
            value: string[];
            bench_mark: string;
            _id: string;
        }[];
        updated: any[];
    };
}
export declare class KPIsErrorResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
export declare class KPIsDeleteResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        _id: string;
        kpis_id: string;
    };
}
export declare class KPIsDeleteErrorResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
