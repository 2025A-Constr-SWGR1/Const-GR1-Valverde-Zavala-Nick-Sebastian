import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    /*console.log('Hello World!');
    console.debug('Hello World!');
    console.info('Hello World!');
    console.warn('Hello World!');
    console.error('Hello World!');*/

    return 'Hello World!!';
  }
}
