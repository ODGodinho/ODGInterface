import { LogLevel } from "../../src/index";

describe("LogLevel.test.ts", () => {
    test("Test LogLevel Enum Object", async () => {
        expect(LogLevel).toMatchInlineSnapshot(`
          {
            "ALERT": "alert",
            "CRITICAL": "critical",
            "DEBUG": "debug",
            "EMERGENCY": "emergency",
            "ERROR": "error",
            "INFO": "info",
            "NOTICE": "notice",
            "WARNING": "warning",
          }
        `);
    });
});
