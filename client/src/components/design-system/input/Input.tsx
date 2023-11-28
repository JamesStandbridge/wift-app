import { DesignComponentContainer, Label } from '../design-system.styled';
import { InputContainer } from './input.styled';

type Props = {
    value: string;
    label: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type?: 'text' | 'password' | 'number';
};

import { Input as AntInput } from 'antd';

const Input = ({
    value,
    label,
    placeholder = '',
    onChange,
    name,
    type = 'text',
}: Props) => {
    return (
        <DesignComponentContainer>
            <Label>{label}</Label>
            <InputContainer>
                <AntInput
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    name={name}
                    type={type}
                />
            </InputContainer>
        </DesignComponentContainer>
    );
};

export default Input;
