import { Controller, Get } from '@nestjs/common';

@Controller()
export class DefaultController {
    
    @Get()
    public async get() {
        return 'Ok'
    }
}
