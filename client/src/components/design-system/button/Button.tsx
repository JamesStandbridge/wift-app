import { Button as AntButton } from 'antd';

type Props = {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined;
    block?: boolean;
};

const Button = ({
    children,
    onClick,
    type = 'primary',
    block = false,
}: Props) => {
    return (
        <AntButton
            onClick={onClick}
            type={type}
            block={block}
            style={{
                margin: '20px 0',
                textTransform: 'uppercase',
                fontWeight: 'bold',
            }}
        >
            {children}
        </AntButton>
    );
};

export default Button;
