// Интерпретация вводимого текста
// Также нужно будет хранить сессии(сообщния) пользователей, чтобы не терять контекст
// Хранить можно только при использовании через телеграм, в CLI не нужно хранить сессии

type ToolResult = {
    name: string;
    arguments: Record<string, unknown>[];
}

type ProcessResult = {
    message: string;
    tools: ToolResult[];
}

// Обработчик сообщений
export class ChatProcessor {
    public async processMessage(sessionId: string, message: string): Promise<ProcessResult> {
        return {
            message: `Echo: ${message}`,
            tools: [
                {
                    name: 'some thool',
                    arguments: [{
                        test: true
                    }]
                }
            ]
        }
    }
}
