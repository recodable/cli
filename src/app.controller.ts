import { AppService } from './app.service';
import { Controller, Command } from '@recodable/khala';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Command()
  setup() {
    this.appService.setupPrettier();
    this.appService.formatProject();
  }
}
