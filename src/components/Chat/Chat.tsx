// Components
import SendMessage from './SendMessage';
import Messages from './Messages';

// Styles
import ChatWrapper from './Chat.styled';


const Chat = () => {

    return (
        <ChatWrapper className='card bg-base-300 shadow-xl mx-8 my-4 h-full'>
            <div className="card-body mx-8">
                <h2 className='card-title'>Chat</h2>
                <Messages />
                <SendMessage />
            </div>
        </ChatWrapper>
    )
};

export default Chat;