import { type LogLevel } from "./LogLevel";

import { type LoggerPluginInterface } from ".";

/**
 * Content type in context
 *
 * @author Dragons Gamers <https://github.com/ODGodinho>
 */
type ContextTypo = Record<string, string> | undefined;

/**
 * Describes a logger instance.
 *
 * The message MUST be a string or JSON
 *
 * The message MAY contain placeholders in the form: {foo} where foo
 * will be replaced by the context data in key "foo".
 *
 * @author Dragons Gamers <https://github.com/ODGodinho>
 */
interface LoggerInterface {

    /**
     * System is unusable.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    emergency(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    alert(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    critical(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    error(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    warning(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Normal but significant events.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    notice(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    info(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Detailed debug information.
     *
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    debug(message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Logs with an arbitrary level.
     *
     * @param {LogLevel} level Log level
     * @param {unknown} message Message Log
     * @param {ContextTypo | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    log(level: LogLevel, message: unknown, context?: ContextTypo): Promise<void>;

    /**
     * Use Plugins in logger class
     *
     * @param {LoggerPluginInterface} plugin Plugin to Load
     *
     * @returns {Promise<void>}
     */
    use(plugin: LoggerPluginInterface): void;
}

export type { LoggerInterface, ContextTypo };
