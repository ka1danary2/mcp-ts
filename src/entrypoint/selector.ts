import { ChatProcessor } from "../ai/processor";
import { CliEntrypoint } from "./cli";
import { EntryPointInterface } from "./interface";
import { TelegramEntrypoint } from "./telegram";

export async function selectEntryPoint(): Promise<EntryPointInterface> {

    // process.argv — это массив, который содержит все аргументы командной строки, с которыми была запущена программа.
    // В данном случае будет вырезаться из консоли вид запуска програамы, например
    // yarn dev:watch --cli - запуск CLI

    const args = process.argv.slice(2);
    const processor = new ChatProcessor();

    if (args.includes('--cli')) {
        return new CliEntrypoint(processor);
    }
    else if (args.includes('--telegram')) {
        return new TelegramEntrypoint(processor);
    }

    throw new Error('No EntryPoint selected. Use --cli or --telegram to specify an entry point.');
}   