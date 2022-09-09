import { WppController } from './shared/wpp.controller';
import { WppService } from './shared/wpp.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        WppController,],
    providers: [
        WppService,],
    exports: [WppService]
})
export class WppModule { }
