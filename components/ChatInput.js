function ChatInput({ onSendMessage, isLoading }) {
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (message.trim() && !isLoading) {
                onSendMessage(message);
                setMessage('');
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <form 
            data-name="chat-input-form"
            onSubmit={handleSubmit} 
            className="border-t border-gray-700 p-4"
        >
            <div className="flex gap-2">
                <input
                    data-name="message-input"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 rounded-lg bg-gray-700 p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                />
                <button
                    data-name="send-button"
                    type="submit"
                    disabled={isLoading}
                    className="police-gradient rounded-lg px-4 py-2 text-white hover:opacity-90 disabled:opacity-50"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
}
