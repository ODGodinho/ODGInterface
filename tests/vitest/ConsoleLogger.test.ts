import { vi } from "vitest";

import { LogLevel, type LogLevelType, ConsoleLogger } from "../../src/index";

import { TestPluginLogger } from "./TestPluginLogger";

describe("ConsoleLogger.test.ts", () => {
    const logger = new ConsoleLogger();
    const spy = vi.spyOn(console, "log").mockImplementation(() => void 0);

    for (const type in LogLevel) {
        const typeCast = type as LogLevelType;
        test(`Test Log ${typeCast}`, async () => {
            const functionName = LogLevel[typeCast];
            await expect(logger[functionName]("anything")).resolves.toBeUndefined();
        });
    }

    test("UnknownLevel", async () => {
        const level = "unknown" as LogLevel;
        await expect(logger.log(level, "anything")).resolves.toBeUndefined();
    });

    test("Plugin Test", async () => {
        logger.use(new TestPluginLogger());
        await expect(logger.log(LogLevel.ALERT, "anything")).resolves.toBeUndefined();

        const lastCallParameters = spy.mock.calls[spy.mock.calls.length - 1];
        expect(lastCallParameters[1]).toEqual("test");
    });
});
