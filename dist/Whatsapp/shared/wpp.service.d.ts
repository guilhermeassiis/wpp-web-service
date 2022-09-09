import { Message } from './message-entity';
export declare class WppService {
    private readonly sender;
    constructor();
    sendMessage(message: Message): Promise<void>;
}
