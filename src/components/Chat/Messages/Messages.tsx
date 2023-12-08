// Hooks
import { useMessages } from 'hooks/useMessages.hook';

// Components
import Message from './Message';

// Interfaces
import { MessageInterface } from 'interfaces/Message.interface';

// Styles
import MessagesWrapper from './Messages.styled';

const Messages = () => {
    const { messages } = useMessages();

    return (
        <MessagesWrapper className='h-full'>            
            {messages.map(({from, content}: MessageInterface, index: number) => (
                <Message
                    from={from}
                    content={content}
                    key={index}
                />
            ))}
        </MessagesWrapper>
    )
};

export default Messages;