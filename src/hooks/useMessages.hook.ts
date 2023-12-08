import { useContext } from 'react';
import MessagesContext from 'contexts/Messages.context';

export const useMessages = () => {
    return useContext(MessagesContext);
};

