const key = 'key:jobs';

class TokenService {

    get() {
        return window.localStorage.getItem(key);
    };

    set(token) {
        window.localStorage.setItem(key, token);
    };

    remove() {
        window.localStorage.removeItem(key);
    };

    hasToken() {
        return !!this.get();
    };

};

export default TokenService;