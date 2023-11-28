import { create } from 'zustand';
import { AuthState } from './auth-store.type';

import axios from 'axios';

export const useAuthStore = create<AuthState>()((set) => ({
    token: null,

    authenticate(token: string) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        set({ token });
    },
    disconnect() {
        delete axios.defaults.headers.common['Authorization'];
        set({ token: null });
    },
}));
