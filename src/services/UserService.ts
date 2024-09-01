// 5. Dependency Inversion Principle (DIP)

import { User } from '../entities/User';
import { Validator } from '../utils/Validator';
import { NotificationService } from './NotificationService';

export class UserService {
    constructor(private notificationService: NotificationService) {}

    createUser(name: string, email: string): User | null {
        if (Validator.isValidEmail(email)) {
            const user = new User(name, email);
            this.notificationService.sendNotification(email, 'Welcome!');
            return user;
        }
        return null;
    }
}