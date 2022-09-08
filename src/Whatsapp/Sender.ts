import { Whatsapp, create } from 'venom-bot';

export class Sender {
  private client: Whatsapp;

  constructor() {
    this.initialize();
  }

  async sendText(to: string, body: string) {
    await this.client.sendText(to, body);
  }

  private initialize() {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const qr = (base64Qrimg: string) => { }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const status = (statusSession: string) => { }

    const start = async (client: Whatsapp) => { 
        this.client = client;
        await this.sendText("558199792209@c.us", "Boa noite mensagem enviada a partir da API HAPPYWALLET");
    };

    create("ws-sender-hw", qr, status)
        .then((client) => start(client))
        .catch((error) => console.error(error));
  }

}
