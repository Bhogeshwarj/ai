
'use client';
 
import { useChat } from 'ai/react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-screen w-full flex-col bg-gray-100 ">
      <header className="flex items-center justify-between border-b bg-white px-4 py-3 ">
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8 text-white">
            <AvatarImage alt="AI Assistant" src="/ai-avatar.png" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-semibold text-gray-900 ">AI Assistant</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <SearchIcon className="h-5 w-5 text-gray-500 hover:text-white" />
          </Button>
          <Button size="icon" variant="ghost" >
            <SettingsIcon className="h-5 w-5 text-gray-500 hover:text-white" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-2xl space-y-8">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
    
      </main>
      <footer className="border-t bg-white px-4 py-3 my-20 mx-10 rounded-lg">
      <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-gray-900 focus:outline-none "
              placeholder="Type your message..."
              type="text"
              value={input}
              onChange={handleInputChange}
            />
            <Button className="rounded-full" size="icon" variant="primary">
              <SendIcon className="h-5 w-5 text-black hover:text-green-400" />
            </Button>
          </form>
        </div>
      </footer>
    </div>
  )
}

function Message({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <Avatar className={`text-white h-10 w-10 ${isUser ? 'ml-4' : 'mr-4'}`}>
        <AvatarImage alt={isUser ? 'User' : 'AI Assistant'} src={isUser ? '/user-avatar.png' : '/ai-avatar.png'} />
        <AvatarFallback>{isUser ? 'U' : 'AI'}</AvatarFallback>
      </Avatar>
      <div className={`flex-1 rounded-lg ${isUser ? 'bg-gray-900 text-gray-50' : 'bg-gray-200 text-gray-900'} p-4`}>
        <p>{message.content}</p>
      </div>
    </div>
  );
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
