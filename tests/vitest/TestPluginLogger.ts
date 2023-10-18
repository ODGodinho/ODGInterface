import {
    type LoggerParserInterface, type LoggerPluginInterface,
} from "../../src/index";

/**
 * Test Plugin Logger
 *
 * @class TestPluginLogger
 * @implements {LoggerPluginInterface}
 */
export class TestPluginLogger implements LoggerPluginInterface {

    public async parser(data: LoggerParserInterface): Promise<LoggerParserInterface> {
        return {
            ...data,
            message: "test",
        };
    }

}
