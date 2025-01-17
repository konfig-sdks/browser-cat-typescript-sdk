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
 * @interface InternalServerErrorError
 */
export interface InternalServerErrorError {
    /**
     * 
     * @type {number}
     * @memberof InternalServerErrorError
     */
    'status': InternalServerErrorErrorStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof InternalServerErrorError
     */
    'error': InternalServerErrorErrorErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof InternalServerErrorError
     */
    'message': string;
}

type InternalServerErrorErrorStatusEnum = 500
type InternalServerErrorErrorErrorEnum = 'Internal Server Error'


