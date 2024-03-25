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
 * @interface ApiKeysCreateApiKey500Response
 */
export interface ApiKeysCreateApiKey500Response {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysCreateApiKey500Response
     */
    'status': ApiKeysCreateApiKey500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysCreateApiKey500Response
     */
    'error': ApiKeysCreateApiKey500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysCreateApiKey500Response
     */
    'message': string;
}

type ApiKeysCreateApiKey500ResponseStatusEnum = 500
type ApiKeysCreateApiKey500ResponseErrorEnum = 'Internal Server Error'


