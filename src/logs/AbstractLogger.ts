import { type LoggerInterface, LogLevel, type ContextTypo } from "../index";
import { type LoggerParserInterface, type LoggerPluginInterface } from "../Interfaces/LoggerPluginInterface";

/**
 * Simple logger implementation
 *
 * @author Dragons Gamers <https://github.com/ODGodinho>
 */
export abstract class AbstractLogger implements LoggerInterface {

    /**
     * Plugins List
     *
     * @protected
     * @type {LoggerPluginInterface[]}
     * @memberof AbstractLogger
     */
    protected readonly plugins: LoggerPluginInterface[] = [];

    /**
     * System is unusable.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async emergency(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.EMERGENCY, message, context);
    }

    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async alert(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.ALERT, message, context);
    }

    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async critical(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.CRITICAL, message, context);
    }

    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async error(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.ERROR, message, context);
    }

    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async warning(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.WARNING, message, context);
    }

    /**
     * Normal but significant events.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async notice(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.NOTICE, message, context);
    }

    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async info(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.INFO, message, context);
    }

    /**
     * Detailed debug information.
     *
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async debug(message: unknown, context?: Record<string, string>): Promise<void> {
        return this.log(LogLevel.DEBUG, message, context);
    }

    /**
     * Register Plugin Logger
     *
     * @param {LoggerPluginInterface} plugin Plugin Class
     * @memberof AbstractLogger
     */
    public use(plugin: LoggerPluginInterface): void {
        this.plugins.push(plugin);
    }

    /**
     * Parser Plugin Logger
     *
     * @param {LogLevel} level Logger
     * @param {unknown} message Message Logger
     * @param {ContextTypo} [context] Context
     * @returns {Promise<LoggerParserInterface>}
     * @memberof AbstractLogger
     */
    public async parser(
        level: LogLevel,
        message: unknown,
        context?: ContextTypo,
    ): Promise<LoggerParserInterface> {
        let newParser: LoggerParserInterface = {
            originalMessage: message,
            level: level,
            message: message,
            context: context,
        };

        for (const plugin of this.plugins) {
            const parser = await plugin.parser(newParser);
            newParser = {
                originalMessage: message,
                level: parser.level,
                message: parser.message,
                context: parser.context,
            };
        }

        return newParser;
    }

    /**
     * Logs with an arbitrary level.
     *
     * @param {LogLevel} level Log level
     * @param {unknown} message Message Log
     * @param {Record<string, string> | undefined} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public abstract log(level: LogLevel, message: unknown, context?: Record<string, string>): Promise<void>;

}
