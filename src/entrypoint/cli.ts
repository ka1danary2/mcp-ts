// CLI (Command Line Interface) — это интерфейс командной строки

import { EntryPointInterface } from "./interface";

export class CliEntrypoint implements EntryPointInterface {
    run(): Promise<void> | void {
        console.log('cli start');
    }
}