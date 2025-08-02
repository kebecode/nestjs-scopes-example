import { Injectable, Scope } from '@nestjs/common';
import { SessionService } from '../session.service';

@Injectable({ scope: Scope.DEFAULT })
export class SingletonService {

    constructor(private sessionService: SessionService) {}

    getSession() {
        return this.sessionService.getSessionId();
    }
}
