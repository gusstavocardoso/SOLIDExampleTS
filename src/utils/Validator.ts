// 1. Single Responsibility Principle (SRP)

export class Validator {
    static isValidEmail(email: string): boolean {
        return /\S+@\S+\.\S+/.test(email);
    }
}