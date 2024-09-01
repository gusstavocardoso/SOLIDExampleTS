// 3. Liskov Substitution Principle (LSP)

import { IEmailSender } from '../interfaces/IEmailSender';

export class AdvancedEmailSender implements IEmailSender {
    sendEmail(recipient: string, subject: string, body: string): void {
        console.log(`Sending advanced email to ${recipient}: ${subject}`);
    }
}