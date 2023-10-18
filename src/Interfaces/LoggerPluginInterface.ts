import { type ContextType, type LogLevel } from ".";

/**
 * Logger Plugin return parser
 *
 * @interface LoggerParserInterface
 */
export interface LoggerParserInterface {
    readonly original: Omit<LoggerParserInterface, "original">;
    level: LogLevel;
    message: unknown;
    context?: ContextType;
}

/**
 * Logger Plugin Interface
 *
 * @interface LoggerPluginInterface
 */
export interface LoggerPluginInterface {

    /**
     * Parser Logger on called
     *
     * @param {LoggerParserInterface} data Received LogLevel
     * @returns {Promise<Omit<LoggerParserInterface, "original">>}
     */
    parser(data: LoggerParserInterface): Promise<Omit<LoggerParserInterface, "original">>;
}
