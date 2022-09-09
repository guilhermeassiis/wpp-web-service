import { Message } from './message-entity';
import { WppService } from './wpp.service';
export declare class WppController {
    private readonly wppService;
    constructor(wppService: WppService);
    sendMessage(message: Message): Promise<{
        Message: string;
    }>;
}
