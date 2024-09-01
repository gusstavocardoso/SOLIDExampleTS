import { EmailSender } from './src/services/EmailSender';
import { NotificationService } from './src/services/NotificationService';
import { UserService } from './src/services/UserService';

const emailSender = new EmailSender();
const notificationService = new NotificationService(emailSender);
const userService = new UserService(notificationService);

const user = userService.createUser('John Doe', 'john.doe@example.com');

if (user) {
    console.log('User created successfully:', user);
} else {
    console.log('Failed to create user.');
}