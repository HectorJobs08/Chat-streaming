import { ButtonInterface } from 'interfaces/components/Button.interface';

const Button = ({
    id,
    type,
    onClick,
    classesName,
    content
} : ButtonInterface) => {

    const handleOnClick = () => onClick();

    return (
        <button
            id={id}
            type={type}
            onClick={handleOnClick}
            className={`btn ${classesName}`}
        >
            {content}
        </button>
    )
};

export default Button;