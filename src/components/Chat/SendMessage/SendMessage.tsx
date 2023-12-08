import { useState } from 'react';

// Hooks
import { useMessages } from 'hooks/useMessages.hook';

// Components
import Button from 'components/Button';

const SendMessage = () => {
    const { messages, setMessages } = useMessages();
    const [message, setMessage] = useState('');

    const handleOnClick = () => {
        setMessages([
            ...messages,
            {
                from: 'Me',
                content: message
            }
        ]);

        setMessage('');
    };

    return (
        <div className="join w-full">
            <input 
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text" 
                placeholder="Type here"
                className="input input-bordered w-full join-item" 
            />

            <Button 
                id='sendMessage'
                type='button'
                onClick={handleOnClick}
                classesName='join-item'
                content={(
                    <span>Send</span>
                )}
            />
        </div>
    )
}

export default SendMessage;