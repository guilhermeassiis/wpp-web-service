export declare class Sender {
    private client;
    constructor();
    sendText(to: string, body: string): Promise<void>;
    private initialize;
}
