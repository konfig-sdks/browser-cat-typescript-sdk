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
 * @interface ForbiddenError
 */
export interface ForbiddenError {
    /**
     * 
     * @type {number}
     * @memberof ForbiddenError
     */
    'status': ForbiddenErrorStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ForbiddenError
     */
    'error': ForbiddenErrorErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ForbiddenError
     */
    'message': string;
}

type ForbiddenErrorStatusEnum = 403
type ForbiddenErrorErrorEnum = 'Forbidden'


