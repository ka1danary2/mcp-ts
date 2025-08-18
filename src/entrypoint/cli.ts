// CLI (Command Line Interface) — это интерфейс командной строки

import { ChatProcessor } from "../ai/processor";
import { EntryPointInterface } from "./interface";

export class CliEntrypoint implements EntryPointInterface {
    constructor(private readonly processor: ChatProcessor) { }

    run(): Promise<void> | void {
        console.log('cli start');
    }
}