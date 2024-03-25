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
 * @interface ApiKeysGetKey404Response
 */
export interface ApiKeysGetKey404Response {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysGetKey404Response
     */
    'status': ApiKeysGetKey404ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysGetKey404Response
     */
    'error': ApiKeysGetKey404ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysGetKey404Response
     */
    'message': string;
}

type ApiKeysGetKey404ResponseStatusEnum = 404
type ApiKeysGetKey404ResponseErrorEnum = 'Not Found'

