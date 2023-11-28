import styled from 'styled-components';

export const Label = styled.p`
    margin: 0;
    font-size: 15px;
    margin-bottom: 5px;
    color: #464646;
`;

export const DesignComponentContainer = styled.div`
    margin: 20px 0;
`;

export const WordSeparator = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.lightPrimaryColor};
    margin: 20px 0;
    font-weight: bold;

    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid ${(props) => props.theme.lightPrimaryColor};
    }

    &::before {
        margin: 0 10px 0 0;
    }

    &::after {
        margin: 0 0 0 10px;
    }
`;
