import styled from 'styled-components';

export const LoginFormContainer = styled.div`
    width: 400px;
`;

export const LoginTitle = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.primaryColor};
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: 2px;
`;
