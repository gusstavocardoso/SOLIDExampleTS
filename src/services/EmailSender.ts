// 2. Open/Closed Principle (OCP)

import { IEmailSender } from '../interfaces/IEmailSender';

export class EmailSender implements IEmailSender {
    sendEmail(recipient: string, subject: string, body: string): void {
        console.log(`Sending email to ${recipient}: ${subject}`);
    }
}