import { LogLevel, type LogLevelType, ConsoleLogger } from "../../src/index";

describe("ConsoleLogger.test.ts", () => {
    const consoleLogger = new ConsoleLogger();

    for (const type in LogLevel) {
        const typeCast = type as LogLevelType;
        test(`Test Log ${typeCast}`, async () => {
            const functionName = LogLevel[typeCast];
            await expect(consoleLogger[functionName]("anything")).resolves.toBeUndefined();
        });
    }

    test("UnknownLevel", async () => {
        const level = "unknown" as LogLevel;
        await expect(consoleLogger.log(level, "anything")).resolves.toBeUndefined();
    });
});
