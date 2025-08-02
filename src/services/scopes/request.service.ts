import { Inject, Injectable, Scope } from '@nestjs/common';
import { SessionService } from '../session.service';

@Injectable({ scope: Scope.REQUEST })
export class RequestService {

    constructor(@Inject('requestSession') private sessionService: SessionService) {}

    getSession() {
        return this.sessionService.getSessionId();
    }
}
