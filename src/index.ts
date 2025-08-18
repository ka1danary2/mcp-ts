import { EntryPointInterface } from "./entrypoint/interface";
import { selectEntryPoint } from "./entrypoint/selector";

selectEntryPoint().then((entryPoint: EntryPointInterface): void => {
    entryPoint.run();
})