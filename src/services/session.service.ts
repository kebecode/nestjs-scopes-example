import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Injectable()
export class SessionService {
    private readonly sessionId = randomUUID();

    getSessionId() {
        return this.sessionId;
    }
}
