/*
BrowserCat API

Providing purr-fect headless browser access via utility endpoints and direct websocket connections.

The version of the OpenAPI document: 1.0.0
Contact: support@browsercat.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ServerCheckHealthStatus500Response
 */
export interface ServerCheckHealthStatus500Response {
    /**
     * 
     * @type {number}
     * @memberof ServerCheckHealthStatus500Response
     */
    'status': ServerCheckHealthStatus500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ServerCheckHealthStatus500Response
     */
    'error': ServerCheckHealthStatus500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ServerCheckHealthStatus500Response
     */
    'message': string;
}

type ServerCheckHealthStatus500ResponseStatusEnum = 500
type ServerCheckHealthStatus500ResponseErrorEnum = 'Internal Server Error'

