import { MessageInterface } from 'interfaces/Message.interface';

const Message = ({
    from,
    content
} : MessageInterface) => {

    const bubblePosition = from === 'Me' ? 'chat-start' : 'chat-end'

    return (
        <div className={`chat ${bubblePosition}`}>
            <div className="chat-header">
                { from }
            </div>
            <div className="chat-bubble">
                { content }
            </div>
        </div>
    )
};

export default Message;