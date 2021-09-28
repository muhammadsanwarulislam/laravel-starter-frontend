import Token from "./Token";
import AppStorage from "./AppStorage";

class User {

    responseAfterLogin(res) {

        const token = res.data.access_token;
        const name = res.data.user.name;

        if (Token.isValidToken(token)) {
            AppStorage.store(name, token);
            window.location = '/dashboard'
        }
    }

    // Checking a token has or not
    hasToken() {
        const storedToken = AppStorage.getToken();

        if (storedToken) {
            return Token.isValidToken(storedToken) ? true : this.logout();
        }

        return false;
    }

    // Check a user is logged in or not
    loggedIn() {
        return this.hasToken();
    }

    // Logout a user
    logout() {
        AppStorage.clear();
        window.location = '/login'
    }

    // get the logged in user name
    username() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    // Get the logged in user id
    userId() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());

            if (payload) {
                return payload.sub;
            }
        }

        return 'Unknown User!';
    }

    own(id) {
        return this.userId() == id;
    }
}

// eslint-disable-next-line no-class-assign
export default User = new User();