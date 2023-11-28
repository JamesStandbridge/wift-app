/**
 * @class
 * @property {string} email
 * @property {string} password
 */
export class LoginPayload {
    email: string;
    password: string;

    /**
     * Creates a new instance of the `LoginPayload` class.
     *
     * @param {string} email
     * @param {string} password
     */
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
