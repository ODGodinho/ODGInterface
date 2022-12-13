import { type LogLevel } from "../index";
import { type TContext } from "../Interfaces/LoggerInterface";

import { AbstractLogger } from "./AbstractLogger";

/**
 * This Logger can be used to avoid conditional log calls.
 *
 * Logging should always be optional, and if no logger is provided to your
 * library creating a NullLogger instance to have something to throw logs at
 * is a good way to avoid littering your code with `if ($this->logger) { }`
 * blocks.
 *
 * @author Dragons Gamers <https://github.com/ODGodinho>
 */
class NullLogger extends AbstractLogger {

    /**
     * Logs with an arbitrary level.
     *
     * @param {LogLevel} _level Log level
     * @param {unknown} _message Message Log
     * @param {TContext} context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async log(_level: LogLevel, _message: unknown, context?: TContext): Promise<void> {
        return void context;
    }

}

export { NullLogger };
