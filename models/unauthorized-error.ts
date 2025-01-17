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
 * @interface UnauthorizedError
 */
export interface UnauthorizedError {
    /**
     * 
     * @type {number}
     * @memberof UnauthorizedError
     */
    'status': UnauthorizedErrorStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UnauthorizedError
     */
    'error': UnauthorizedErrorErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof UnauthorizedError
     */
    'message': string;
}

type UnauthorizedErrorStatusEnum = 401
type UnauthorizedErrorErrorEnum = 'Unauthorized'


