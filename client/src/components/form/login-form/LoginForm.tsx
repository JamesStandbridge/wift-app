import { useState } from 'react';
import { LoginPayload } from '../../../API/model/LoginPayload';
import {
    LoginFormContainer,
    LoginTitle,
    CreateAccountText,
    Link,
} from './login-form.styled';
import Input from '../../design-system/input/Input';
import Button from '../../design-system/button/Button';
import { login } from '../../../API/repository/auth-repository';
import { useAuthStore } from '../../../state-manager/auth-store/authStore';
import { WordSeparator } from '../../design-system/design-system.styled';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

type Props = {};

const LoginForm = ({}: Props) => {
    const authenticate = useAuthStore((state) => state.authenticate);

    const [credentials, setCredentials] = useState<LoginPayload>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const loginAction = async () => {
            const res = await login(credentials);
            authenticate(res.token);
        };

        loginAction();
    };

    return (
        <LoginFormContainer>
            <LoginTitle>User login</LoginTitle>
            <Input
                prefix={<UserOutlined />}
                value={credentials.email}
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                label="email"
            />
            <Input
                prefix={<LockOutlined />}
                value={credentials.password}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                label="password"
                type="password"
            />
            <Button block onClick={handleSubmit}>
                Submit
            </Button>
            <WordSeparator>OR</WordSeparator>

            <CreateAccountText>
                Need an account ? <Link>SIGN UP</Link>
            </CreateAccountText>
        </LoginFormContainer>
    );
};

export default LoginForm;
