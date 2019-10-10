import { AppService } from './app.service';
import { Controller, Command } from '@recodable/khala';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Command()
  setup() {
    console.log('here');
  }
}
