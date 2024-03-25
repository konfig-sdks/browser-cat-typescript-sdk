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
 * @interface ApiKeysUpdateKey401Response
 */
export interface ApiKeysUpdateKey401Response {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysUpdateKey401Response
     */
    'status': ApiKeysUpdateKey401ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysUpdateKey401Response
     */
    'error': ApiKeysUpdateKey401ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysUpdateKey401Response
     */
    'message': string;
}

type ApiKeysUpdateKey401ResponseStatusEnum = 401
type ApiKeysUpdateKey401ResponseErrorEnum = 'Unauthorized'

