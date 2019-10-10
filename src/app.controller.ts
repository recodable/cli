import { AppService } from './app.service';
import { Controller, Command } from '@recodable/khala';
import { execSync } from 'child_process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Command()
  setup() {
    execSync('npm i @recodable/prettier-config');
  }
}
