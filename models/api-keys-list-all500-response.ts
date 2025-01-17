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
 * @interface ApiKeysListAll500Response
 */
export interface ApiKeysListAll500Response {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysListAll500Response
     */
    'status': ApiKeysListAll500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysListAll500Response
     */
    'error': ApiKeysListAll500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysListAll500Response
     */
    'message': string;
}

type ApiKeysListAll500ResponseStatusEnum = 500
type ApiKeysListAll500ResponseErrorEnum = 'Internal Server Error'


