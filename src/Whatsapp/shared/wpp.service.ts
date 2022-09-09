import { Message } from './message-entity';
import { Sender } from './Sender';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WppService {

    private readonly sender: Sender;
    constructor() {
        this.sender = new Sender();
    }

    public async sendMessage(message: Message) {
        await this.sender.sendText(message.to, message.message);
    }
    
 }
