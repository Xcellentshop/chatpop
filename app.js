function App() {
    const [messages, setMessages] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (message) => {
        try {
            setMessages(prev => [...prev, { text: message, isAi: false }]);
            setIsLoading(true);

            const response = await sendMessageToN8N(message);
            
            if (response && response.reply) {
                setMessages(prev => [...prev, { text: response.reply, isAi: true }]);
            } else {
                throw new Error('Resposta inválida do servidor');
            }
        } catch (error) {
            reportError(error);
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                text: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde.", 
                isAi: true 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div data-name="chat-app" className="min-h-screen">
            <Header />
            
            <main className="container mx-auto px-4 py-6">
                <div data-name="chat-container" className="chat-container rounded-lg shadow-xl max-w-3xl mx-auto">
                    <div 
                        data-name="message-container"
                        className="message-container h-[60vh] overflow-y-auto p-4"
                    >
                        {messages.map((msg, index) => (
                            <ChatMessage
                                key={index}
                                message={msg.text}
                                isAi={msg.isAi}
                            />
                        ))}
                        {isLoading && <Loading />}
                        <div ref={messagesEndRef} />
                    </div>
                    
                    <ChatInput 
                        onSendMessage={handleSendMessage}
                        isLoading={isLoading}
                    />
                </div>
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
