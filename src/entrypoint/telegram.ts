import { ChatProcessor } from "../ai/processor";
import { EntryPointInterface } from "./interface";

export class TelegramEntrypoint implements EntryPointInterface {
    constructor(process: ChatProcessor) { }

    run(): Promise<void> | void {
        console.log('telegram start');
    }
}