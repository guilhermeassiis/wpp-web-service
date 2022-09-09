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
    const status = (statusSession: string, session: string) => { }

    const start = async (client: Whatsapp) => { 
        this.client = client;
    };

    create({
      session: 'sender-hw',
      catchQR: qr,
      statusFind: status
    }).then((client) => start(client))
      .catch((erro) => console.error(erro));
      
  }

}
