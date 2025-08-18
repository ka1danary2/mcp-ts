export interface EntryPointInterface {
    run: () => Promise<void> | void;
}