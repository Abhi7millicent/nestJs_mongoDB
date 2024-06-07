/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model, FilterQuery, QueryOptions, PopulatedDoc } from 'mongoose';
import { UpdateResponseDto } from '../dto/update-response.dto';
interface FindAllOptions<T> extends QueryOptions {
    sort?: any;
    limit?: number;
    skip?: number;
    select?: any;
    populate?: any;
}
export declare abstract class GenericRepository<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    create(entity: Partial<T>): Promise<T>;
    createByKey(id: string, keyPath: string[], data: any): Promise<any>;
    update(criteria: FilterQuery<T>, update: Partial<T>): Promise<UpdateResponseDto & {
        updatedData: T;
    }>;
    updateByKey(id: string, keyPath: string[], subId: string, data: any): Promise<any>;
    delete(id: string): Promise<T>;
    deleteByKey(id: string, keyPath: string[], subId: string): Promise<any>;
    softDelete(id: string): Promise<T>;
    softDeleteByKey(id: string, keyPath: string[], subId: string): Promise<any>;
    findAll(criteria?: FilterQuery<T>, options?: FindAllOptions<T>): Promise<T[]>;
    findById(id: string): Promise<T>;
    findOne(criteria?: FilterQuery<T>, options?: FindAllOptions<T>): Promise<T | null>;
    restore(id: string): Promise<T>;
    findOneOrFailParam(criteria?: any, select?: string, populate?: string | QueryOptions): Promise<PopulatedDoc<T>>;
}
export {};
