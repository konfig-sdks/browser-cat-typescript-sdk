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
 * @interface BadGatewayError
 */
export interface BadGatewayError {
    /**
     * 
     * @type {number}
     * @memberof BadGatewayError
     */
    'status': BadGatewayErrorStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BadGatewayError
     */
    'error': BadGatewayErrorErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BadGatewayError
     */
    'message': string;
}

type BadGatewayErrorStatusEnum = 502
type BadGatewayErrorErrorEnum = 'Bad Gateway'


