import LoginPage from '../components/pages/single/LoginPage';
import { useAuthStore } from '../state-manager/auth-store/authStore';

type Props = {};

const AppContext = ({}: Props) => {
    const token = useAuthStore((state) => state.token);

    return <>{token === null ? <LoginPage /> : null}</>;
};

export default AppContext;
