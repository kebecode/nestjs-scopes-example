import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SingletonService } from './services/scopes/singleton.service';
import { RequestService } from './services/scopes/request.service';
import { TransientService } from './services/scopes/transient.service';
import { ModuleRef } from '@nestjs/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private singletonService: SingletonService,
    private requestService: RequestService,
    private moduleRef: ModuleRef
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('singleton')
  getSingletonSession() {
    return [{
      sessionId: this.singletonService.getSession()
    },
    {
      sessionId: this.singletonService.getSession()
    }]
  }

  @Get('request')
  getRequestSession() {
    return [{
      sessionId: this.requestService.getSession()
    },
    {
      sessionId: this.requestService.getSession()
    }]
  }

  @Get('transient')
  async getTransientSession() {
    const transientService1 = await this.moduleRef.resolve(TransientService);
    const transientService2 = await this.moduleRef.resolve(TransientService);
    return [{
      sessionId: transientService1.getSession()
    },
    {
      sessionId: transientService2.getSession()
    }]
  }
}
