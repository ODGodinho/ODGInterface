import { LogLevel, type LogLevelType, NullLogger } from "../../src/index";

describe("AbstractLogger.test.ts", () => {
    const logger = new NullLogger();

    for (const type in LogLevel) {
        const typeCast = type as LogLevelType;
        test(`Test Log ${typeCast}`, async () => {
            const functionName = LogLevel[typeCast];
            await expect(logger[functionName]("anything")).resolves.toBeUndefined();
        });
    }
});
