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
 * @interface ApiKeysUpdateKey403Response
 */
export interface ApiKeysUpdateKey403Response {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysUpdateKey403Response
     */
    'status': ApiKeysUpdateKey403ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysUpdateKey403Response
     */
    'error': ApiKeysUpdateKey403ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysUpdateKey403Response
     */
    'message': string;
}

type ApiKeysUpdateKey403ResponseStatusEnum = 403
type ApiKeysUpdateKey403ResponseErrorEnum = 'Forbidden'


