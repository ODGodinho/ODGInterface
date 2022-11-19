import { LoggerInterface } from "./LoggerInterface";

/**
 * Describes a logger-aware instance.
 *
 * @author Dragons Gamers <https://github.com/ODGodinho>
 */
interface LoggerAwareInterface
{
    /**
     * Sets a logger instance in objet/class
     *
     * @param {LoggerInterface} logger
     * @returns {void}
     */
    setLogger(logger: LoggerInterface): void;
}

export { LoggerAwareInterface };
