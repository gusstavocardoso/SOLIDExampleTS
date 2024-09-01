// 4. Interface Segregation Principle (ISP)

import { IEmailSender } from '../interfaces/IEmailSender';

export class NotificationService {
    constructor(private emailSender: IEmailSender) {}

    sendNotification(email: string, message: string) {
        this.emailSender.sendEmail(email, 'Notification', message);
    }
}