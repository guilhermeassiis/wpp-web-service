import { Message } from './message-entity';
import { WppService } from './wpp.service';
import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';


@Controller('v1/wpp')
export class WppController {
    constructor(private readonly wppService: WppService) {}

    @Post()
    @HttpCode(200)
    public async sendMessage(@Body() message: Message) {
        try {
            await this.wppService.sendMessage(message);
            return {Message: message.message}
        } catch (err) {
            throw new BadRequestException(err.Message);
        }
    }
}

