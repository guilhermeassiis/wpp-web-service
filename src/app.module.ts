import { WppModule } from './Whatsapp/wpp.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [WppModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
