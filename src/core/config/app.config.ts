// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// import * as path from 'path';

// export class AppConfig {
//   private readonly envConfig: { [key: string]: string };

//   constructor() {
//     console.log('env:', process.env.NODE_ENV);
//     const environment = process.env.NODE_ENV;

//     // Check for a general environment variable to detect non-local environments
//     if (process.env.ENVIRONMENT) {
//       this.envConfig = {};
//     } else {
//       const envFilePath = path.resolve(__dirname, `../../.env.${environment}`);
//       this.envConfig = dotenv.parse(fs.readFileSync(envFilePath));
//     }
//   }

//   get(key: string): string {
//     // Check if the key exists in process.env
//     if (process.env[key]) {
//       return process.env[key] as string;
//     }
//     // Fall back to .env file if the key is not found in process.env
//     return this.envConfig[key];
//   }
// }
