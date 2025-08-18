import { EntryPointInterface } from "./interface";

export class TelegramEntrypoint implements EntryPointInterface {
    run(): Promise<void> | void {
        console.log('telegram start');
    }
}