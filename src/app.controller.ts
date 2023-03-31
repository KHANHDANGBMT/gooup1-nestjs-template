import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return this.appService.getHello();
  }

  @Get('age')
  getAge(): string {
    return this.appService.getHello();
  }
}
