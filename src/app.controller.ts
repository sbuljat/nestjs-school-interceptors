import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ExcludeNullInterceptor } from './interceptors/exclude-null.interceptor';
import { MaskPasswordInterceptor } from './interceptors/mask-password.interceptor';

@Controller()
@UseInterceptors(ExcludeNullInterceptor)
@UseInterceptors(MaskPasswordInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): { name: string; password: string } {
    return { name: 'John Doe', password: '123456' };
  }

  @Get('null')
  getNull(): string {
    return null;
  }
}
