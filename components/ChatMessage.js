function ChatMessage({ message, isAi }) {
    return (
        <div
            data-name="chat-message"
            className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}
        >
            <div
                className={`max-w-[80%] rounded-lg p-3 ${
                    isAi 
                        ? 'bg-blue-900 text-white' 
                        : 'bg-blue-600 text-white'
                }`}
            >
                <p data-name="message-text" className="text-sm">
                    {message}
                </p>
                <span 
                    data-name="message-time" 
                    className="text-xs opacity-75 mt-1 block"
                >
                    {new Date().toLocaleTimeString()}
                </span>
            </div>
        </div>
    );
}
