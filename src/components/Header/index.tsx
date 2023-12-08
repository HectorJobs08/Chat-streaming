import Head from "next/head";

// Interfaces
import { HeaderInterface } from "interfaces/components/Header.interface";

const Header = ({
    title,
    description,
    viewport,
    icon,
} : HeaderInterface) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content={viewport} />
            <link rel="icon" href={icon} />
        </>
    )
};

export default Header;