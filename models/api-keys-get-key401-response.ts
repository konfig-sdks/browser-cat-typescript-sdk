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
 * @interface ApiKeysGetKey401Response
 */
export interface ApiKeysGetKey401Response {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysGetKey401Response
     */
    'status': ApiKeysGetKey401ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysGetKey401Response
     */
    'error': ApiKeysGetKey401ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysGetKey401Response
     */
    'message': string;
}

type ApiKeysGetKey401ResponseStatusEnum = 401
type ApiKeysGetKey401ResponseErrorEnum = 'Unauthorized'


