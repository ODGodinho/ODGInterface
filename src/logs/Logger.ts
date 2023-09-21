import {
    type LoggerParserInterface, type ContextType, type LoggerPluginInterface, type LogLevel, type LoggerInterface,
} from "../Interfaces";

import { AbstractLogger } from "./AbstractLogger";

export class Logger extends AbstractLogger {

    private readonly handlers: LoggerInterface[] = [];

    private readonly processors: LoggerPluginInterface[] = [];

    /**
     * Add new handler logger
     *
     * @param {LoggerInterface} logger Logger Handler
     * @returns {void}
     */
    public pushHandler(logger: LoggerInterface): void {
        this.handlers.push(logger);
    }

    /**
     * Add new handler logger
     *
     * @returns {LoggerInterface[]}
     */
    public getHandlers(): LoggerInterface[] {
        return [ ...this.handlers ];
    }

    /**
     * Add new Processors Logger for all handlers
     *
     * @param {LoggerPluginInterface} processor Logger Handler
     * @returns {void}
     */
    public pushProcessor(processor: LoggerPluginInterface): void {
        this.processors.push(processor);
    }

    /**
     * Get All logger Processors
     *
     * @returns {LoggerPluginInterface[]}
     */
    public getProcessor(): LoggerPluginInterface[] {
        return [ ...this.processors ];
    }

    public async log(level: LogLevel, message: unknown, context?: Record<string, string>): Promise<void> {
        const processor = await this.getProcessorData(level, message, context);

        await Promise.all(
            this.handlers.map(async (handler: LoggerInterface) => handler.log(
                processor.level,
                processor.message,
                processor.context,
            )),
        );
    }

    /**
     * Parser Plugin Logger
     *
     * @param {LogLevel} level Logger
     * @param {unknown} message Message Logger
     * @param {ContextType | undefined} context Context
     * @returns {Promise<LoggerParserInterface>}
     */
    private async getProcessorData(
        level: LogLevel,
        message: unknown,
        context?: ContextType,
    ): Promise<LoggerParserInterface> {
        const original = {
            level: level,
            message: message,
            context: context,
        };
        let newParser: LoggerParserInterface = {
            original: original,
            level: level,
            message: message,
            context: context,
        };

        for (const processor of this.processors) {
            newParser = {
                ...await processor.parser(newParser),
                original,
            };
        }

        return newParser;
    }

}
