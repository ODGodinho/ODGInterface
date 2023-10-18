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
export class NullLogger extends AbstractLogger {

    /**
     * Logs with an arbitrary level.
     *
     * @returns {Promise<void>}
     */
    public async log(): Promise<void> {
        // Not have action
    }

}
