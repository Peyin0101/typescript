"use strict";
class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = this.generatePassword();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    resetPassword() {
        this.password = this.generatePassword();
        console.log("Wachtwoord is succesvol gereset.");
    }
    showUserInfo() {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Email: ${this.email}`);
    }
    setPassword(newPassword) {
        if (this.isValidPassword(newPassword)) {
            this.password = newPassword;
            console.log("Wachtwoord succesvol ingesteld.");
        }
        else {
            console.log("Wachtwoord voldoet niet aan de vereisten.");
        }
    }
    isValidPassword(password) {
        const regEx = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%]).{8,}$/;
        return regEx.test(password);
    }
    generatePassword() {
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChars = "@#$%";
        let password = "";
        password += letters.charAt(Math.floor(Math.random() * letters.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        const allChars = letters + numbers + specialChars;
        const length = Math.floor(Math.random() * 6) + 5;
        for (let i = 0; i < length; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        return password;
    }
}
const user1 = new User("John", "Doe", "john.doe@example.com");
const user2 = new User("Jane", "Smith", "jane.smith@example.com");
console.log("Log user info:");
user1.showUserInfo();
console.log("----------");
console.log("Log user info:");
user2.showUserInfo();
console.log("----------");
console.log("getFullName");
console.log(user1.getFullName());
console.log("----------");
user1.resetPassword();
console.log("----------");
user1.setPassword("$R@nd1m0Ran$");
console.log("----------");
user2.setPassword("malo");
console.log("----------");
