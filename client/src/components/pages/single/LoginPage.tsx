import LoginForm from '../../form/login-form/LoginForm';
import {
    LoginPageContainer,
    LoginPageRight,
    LoginPageLeft,
    MainTitle,
    InnerLeft,
    SubTitle,
} from './login-page.styled';

type Props = {};

const LoginPage = ({}: Props) => {
    return (
        <LoginPageContainer>
            <LoginPageLeft>
                <InnerLeft>
                    <MainTitle>Welcome to Wift</MainTitle>
                    <SubTitle>
                        Turn every occasion into a perfect moment. Join Wift and
                        discover the joy of giving and receiving gifts that
                        truly matter.
                    </SubTitle>
                </InnerLeft>
            </LoginPageLeft>
            <LoginPageRight>
                <LoginForm />
            </LoginPageRight>
        </LoginPageContainer>
    );
};

export default LoginPage;
