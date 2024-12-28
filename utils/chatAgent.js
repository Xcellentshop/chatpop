async function sendMessageToN8N(message) {
    try {
        // Create payload in the format expected by n8n
        const payload = [{
            sessionId: "2fcb6b406177455e9d79bf3dd8eeb8f4",
            action: "sendMessage",
            chatInput: message
        }];

        const response = await fetch('https://n8n.atendimentochat.store/webhook/dbd4f0e9-bcf4-4adf-b5af-c840f5a2b6c1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}. description: ${errorText}`);
        }

        const data = await response.json();
        
        // Return the response in a format the chat expects
        return {
            reply: data.message || data.response || "Desculpe, não entendi sua mensagem."
        };
    } catch (error) {
        reportError(error);
        throw error;
    }
}
