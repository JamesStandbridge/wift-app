const apiUrl = import.meta.env.VITE_API_DOMAIN;

/**
 * An object containing API endpoints for various resources and actions.
 *
 * The `endpoints` object provides a convenient way to access different API endpoints
 * by defining them as functions. Each function returns the full URL for a specific API request.
 *
 * @const
 * @type {object}
 * @property {function} POST_LOGIN - Returns the URL for login
 */
export const endpoints = {
    POST_LOGIN: () => `${apiUrl}/api/auth/login`,
};
