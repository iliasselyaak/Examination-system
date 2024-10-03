class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getEmail() {
        return this.email;
    }

    changePassword(newPassword) {
        this.password = newPassword;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    login(username, password) {
        if(username == this.username && password == this.password){
            return Registry.getInstance().login(this);
        }
        else{
            return false;
        }
    }

    logout() {
        return true;
    }
}
