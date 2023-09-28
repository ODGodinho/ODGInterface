import util from "node:util";

import { type JSONLoggerString, type JSONLogger } from "@odg/json-log";
import chalk from "chalk";

export class StringMessageFormatter {

    public format(message: JSONLogger | JSONLoggerString): string {
        if (message.request) return this.formatRequester(message);

        if (message.exception) {
            return `${chalk.whiteBright.bold("Exception -")} ${message.exception.stack}`;
        }

        return util.format(message.message || message);
    }

    private formatRequester(message: JSONLogger | JSONLoggerString): string {
        const requester = message.request!;
        const url = chalk.white(`${requester.baseURL! || ""}${requester.url! || ""}`);
        const statusCode = message.request?.response?.status;
        const status = statusCode
            ? chalk.bgKeyword(this.getStatusCodeColor(statusCode)).white(statusCode)
            : chalk.bgGrey("XXX");
        const method = (requester.method ?? "GET").toUpperCase();

        return `${chalk.bold("Request -")} ${chalk.bgGrey(method)} ${url} ${status}`;
    }

    private getStatusCodeColor(statusCode: number): string {
        const httpStatus5XX = 500;
        const httpStatus4XX = 400;
        const httpStatus3XX = 300;
        const httpStatus2XX = 200;

        switch (true) {
            case statusCode >= httpStatus5XX: return "red";
            case statusCode >= httpStatus4XX: return "yellow";
            case statusCode >= httpStatus3XX: return "cyan";
            case statusCode >= httpStatus2XX: return "green";
            default: return "orange";
        }
    }

}
