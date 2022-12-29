import util from "node:util";

import chalk from "chalk";

import { LogLevel } from "../index";
import { type ContextTypo } from "../Interfaces/LoggerInterface";

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
export class ConsoleLogger extends AbstractLogger {

    /**
     * Logs with an arbitrary level.
     *
     * @param {LogLevel} level Log level
     * @param {unknown} message Message Log
     * @param {ContextTypo} _context Context Message replace
     *
     * @returns {Promise<void>}
     */
    public async log(level: LogLevel, message: unknown, _context?: ContextTypo): Promise<void> {
        console.log(this.getLevel(level), util.format(message));
    }

    private getLevel(level: LogLevel): string {
        const message = `${level}:`;

        switch (level) {
        case LogLevel.EMERGENCY:
            return chalk.bgBlack.bold.white(message);
        case LogLevel.ALERT:
            return chalk.bgHex("#FFCBCD").bold.white(message);
        case LogLevel.CRITICAL:
            return chalk.bgRedBright.bold.white(message);
        case LogLevel.ERROR:
            return chalk.bgWhite.red(message);
        case LogLevel.WARNING:
            return chalk.bgYellow.white(message);
        case LogLevel.NOTICE:
            return chalk.bgBlue.white(message);
        case LogLevel.INFO:
            return chalk.bgCyan.white(message);
        case LogLevel.DEBUG:
            return chalk.bgMagenta.white(message);
        default:
            return chalk.bgGray.white("UNKNOWN");
        }
    }

}
