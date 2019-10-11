import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class AppService {
  setupPrettier() {
    execSync('npm i @recodable/prettier-config');
    const packageFilePath = `${process.cwd()}/package.json`;
    const rawData = readFileSync(packageFilePath);
    const data = JSON.parse(rawData.toString());
    if (!data.prettier) {
      data.prettier = '@recodable/prettier-config';
    }
    if (!data.scripts.format) {
      data.scripts.format = 'prettier--write "src/**/*.ts"';
    }
    writeFileSync(packageFilePath, JSON.stringify(data, null, 2));
  }

  formatProject() {
    execSync('npm run format');
  }
}
