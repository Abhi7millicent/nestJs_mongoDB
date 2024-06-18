// import {
//   MongooseModuleOptions,
//   MongooseOptionsFactory,
// } from '@nestjs/mongoose';
// import { Injectable } from '@nestjs/common';
// import { AppConfig } from 'src/core/config/app.config';
// import { Connection } from 'mongoose';

// @Injectable()
// export class DatabaseConfig implements MongooseOptionsFactory {
//   constructor(private appConfig: AppConfig) {}

//   createMongooseOptions(): MongooseModuleOptions {
//     const uri = `${this.appConfig.get('DB_URI')}`;
//     return {
//       uri,
//       connectionFactory: (connection: Connection) => {
//         connection.set('useNewUrlParser', true);
//         connection.set('useUnifiedTopology', true);
//         return connection;
//       },
//     };
//   }
// }
