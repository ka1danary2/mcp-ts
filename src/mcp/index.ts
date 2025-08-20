import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { EmailService } from '../services/EmailService';
import { UserService } from '../services/UserService';

const server = new McpServer({
    name: 'demo-server',
    version: '0.1.0',
})

server.registerTool('send-message', {
    titile: 'Отправить сообщение',
    description: 'Отправляет сообщение пользователю, текст сообщения обязательный',
    inputSchema: z.object({
        text: z.string().describe('Текст сообщения'),
    })
})