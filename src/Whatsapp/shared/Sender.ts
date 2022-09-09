import { Whatsapp, create } from 'venom-bot';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';



export class Sender {
  private client: Whatsapp;

  constructor() {
    this.initialize();
  }

  async sendText(to: string, body: string) {

    if(!isValidPhoneNumber(to, "BR")) {
      throw new Error("This number is not valid");
    }

    let phoneNumber = parsePhoneNumber(to, "BR")?.format("E.164").replace('+', '') as string;
    phoneNumber = phoneNumber.includes("@c.us") ? phoneNumber : `${phoneNumber}@c.us`;

    await this.client.sendText(phoneNumber, body);
  }

  private initialize() {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const qr = (base64Qrimg: string) => { }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const status = (statusSession: string) => { }

    const start = async (client: Whatsapp) => { 
        this.client = client;
    };

    create("ws-sender-hw", qr, status)
        .then((client) => start(client))
        .catch((error) => console.error(error));
  }

}
