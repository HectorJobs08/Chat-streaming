import Header from 'components/Header';

// Context
import { MessagesProvider } from 'contexts/Messages.context';

// Components
import Chat from 'components/Chat';

export default function Home() {
  return (
    <>
      <Header 
        title='Chat'
        description='This is a chat'
        viewport='width=device-width, initial-scale=1'
        icon='/favicon.ico'
      />

      <MessagesProvider>
        <Chat />
      </MessagesProvider>
    </>
  )
}
