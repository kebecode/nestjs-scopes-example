import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionService } from './services/session.service';
import { SingletonService } from './services/scopes/singleton.service';
import { RequestService } from './services/scopes/request.service';
import { TransientService } from './services/scopes/transient.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SessionService, SingletonService, RequestService, TransientService],
})
export class AppModule {}
