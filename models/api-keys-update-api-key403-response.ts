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
 * @interface ApiKeysUpdateApiKey403Response
 */
export interface ApiKeysUpdateApiKey403Response {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysUpdateApiKey403Response
     */
    'status': ApiKeysUpdateApiKey403ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysUpdateApiKey403Response
     */
    'error': ApiKeysUpdateApiKey403ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysUpdateApiKey403Response
     */
    'message': string;
}

type ApiKeysUpdateApiKey403ResponseStatusEnum = 403
type ApiKeysUpdateApiKey403ResponseErrorEnum = 'Forbidden'


