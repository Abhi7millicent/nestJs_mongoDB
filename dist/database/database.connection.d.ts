import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
export declare class DatabaseConnection implements MongooseOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createMongooseOptions(): MongooseModuleOptions;
}
