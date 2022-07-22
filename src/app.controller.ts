import {
  Body,
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
  @UseInterceptors(FileInterceptor('62c6f2c07034cb001c892454.pdf'))
  async postFile(@UploadedFile() file) {
    console.log('Hello');
    console.log(file);
    return file;
  }

  @Post('verification/pdf/download')
  @UseInterceptors(FileInterceptor('file'))
  async verificationpdf(@UploadedFile() file, @Body() body) {
    console.log('pdf file', file)
    // console.log(file)
    console.log('pdf body values', body)
    Stream.pipe(file)
    // return await this.borrowerService.verificationpdf(file, body);
  }

  @Post('pdf/download')
  async userVerification(@Body() responseData: any) {
    console.log('responseData', responseData);
  }
}
