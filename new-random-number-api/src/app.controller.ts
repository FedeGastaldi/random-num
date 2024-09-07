import { Controller, Post } from '@nestjs/common';

@Controller('random')
export class AppController {
  @Post()
  generateRandomNumber(): { value: number } {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    return { value: randomValue };
  }
}
