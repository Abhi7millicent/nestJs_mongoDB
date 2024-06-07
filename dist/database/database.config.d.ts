import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { AppConfig } from 'src/config/app.config';
export declare class DatabaseConfig implements MongooseOptionsFactory {
    private appConfig;
    constructor(appConfig: AppConfig);
    createMongooseOptions(): MongooseModuleOptions;
}
