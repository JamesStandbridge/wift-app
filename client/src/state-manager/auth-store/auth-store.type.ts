export interface AuthState {
    token: string | null;
    authenticate: (token: string) => void;
    disconnect: () => void;
}
