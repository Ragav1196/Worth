import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post')
  @UseInterceptors(FileInterceptor('62c6f2c07034cb001c892456'))
  postFile(@UploadedFile() file) {
    console.log('Hello');
    console.log(file);
    return file;
  }
}
