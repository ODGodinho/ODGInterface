/**
 * Describes log levels.
 *
 * @author Dragons Gamers <https://github.com/ODGodinho>
 */
enum LogLevel {
    EMERGENCY = "emergency",
    ALERT = "alert",
    CRITICAL = "critical",
    ERROR = "error",
    WARNING = "warning",
    NOTICE = "notice",
    INFO = "info",
    DEBUG = "debug",
}

type LogLevelType = keyof typeof LogLevel;

export { LogLevel, type LogLevelType };
