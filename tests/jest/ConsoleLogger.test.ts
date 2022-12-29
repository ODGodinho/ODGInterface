import { LogLevel, type LogLevelType, ConsoleLogger } from "../../src/index";

describe("ConsoleLogger.test.ts", () => {
    const logger = new ConsoleLogger();
    jest.spyOn(console, "log").mockImplementation(() => void 0);

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
});
