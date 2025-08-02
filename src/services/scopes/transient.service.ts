import { Injectable, Scope } from '@nestjs/common';
import { SessionService } from '../session.service';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {

    constructor(private sessionService: SessionService) {}

    getSession() {
        return this.sessionService.getSessionId();
    }
}
