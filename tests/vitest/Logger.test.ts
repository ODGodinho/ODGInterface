import { vi } from "vitest";

import { ConsoleLogger, LogLevel } from "src";
import { Logger } from "src/logs/Logger";
import { TestPluginLogger } from "tests/vitest/TestPluginLogger";

describe("Logger class test", () => {
    const logger = new Logger();
    logger.pushHandler(new ConsoleLogger());
    logger.pushProcessor(new TestPluginLogger());
    const spy = vi.spyOn(console, "log").mockImplementation(() => void 0);

    test("Test Processor in ConsoleLogger", async () => {
        await expect(logger.log(LogLevel.ALERT, "anything")).resolves.toBeUndefined();

        const lastCallParameters = spy.mock.calls[spy.mock.calls.length - 1];
        expect(lastCallParameters[1]).toEqual("test");
    });

    test("Test Get Handlers and Processors", async () => {
        expect(logger.getHandlers()).toHaveLength(1);
        expect(logger.getProcessor()).toHaveLength(1);
    });
});
