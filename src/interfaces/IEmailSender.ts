export interface IEmailSender {
    sendEmail(recipient: string, subject: string, body: string): void;
}