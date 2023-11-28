import apiService from '../axios/AxiosService';
import { LoginPayload } from '../model/LoginPayload';
import { endpoints } from '../registry';

/**
 * @async
 * @function
 * @returns {Promise<{token: string}>} - A promise that resolves with a string token.
 * @throws {Error} - Throws an error if the API request fails.
 */
export const login = async (
    credentials: LoginPayload,
): Promise<{ token: string }> => {
    const { data } = await apiService.post<LoginPayload, { token: string }>(
        endpoints.POST_LOGIN(),
        credentials,
    );
    return data;
};
