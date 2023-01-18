import { type ContextTypo, type LogLevel } from ".";

/**
 * Logger Plugin return parser
 *
 * @interface LoggerParserInterface
 */
export interface LoggerParserInterface {
    readonly originalMessage: unknown;
    level: LogLevel;
    message: unknown;
    context?: ContextTypo;
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
     * @returns {Promise<LoggerParserInterface>}
     * @memberof LoggerPluginInterface
     */
    parser(data: LoggerParserInterface): Promise<LoggerParserInterface>;
}
