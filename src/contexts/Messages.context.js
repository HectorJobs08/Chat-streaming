import { useState, createContext } from 'react';

const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    return (
        <MessagesContext.Provider
            value={{
                messages,
                setMessages
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
};

export default MessagesContext;