import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

export class AppConfig {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const environment = 'dev';
    const envFilePath = path.resolve(__dirname, `../../${environment}.env`);
    // console.log('envFilePath:', envFilePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFilePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
