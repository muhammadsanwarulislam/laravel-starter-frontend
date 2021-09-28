class AppStorage {

    // Store the access token
    storeToken(token) {
        localStorage.setItem('token', token);
    }

    // Store the logged in user
    storeUser(user) {
        localStorage.setItem('user', user);
    }

    // Store Logged in user and token
    store(user, token) {
        this.storeUser(user);
        this.storeToken(token);
    }

    // Clear logged in user and token by logout
    clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    // Get the token
    getToken() {
        return localStorage.getItem('token');
    }

    // Get the logged in user
    getUser() {
        return localStorage.getItem('user');
    }
}

// eslint-disable-next-line no-class-assign
export default AppStorage = new AppStorage();
