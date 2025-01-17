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
 * @interface GatewayTimeoutError
 */
export interface GatewayTimeoutError {
    /**
     * 
     * @type {number}
     * @memberof GatewayTimeoutError
     */
    'status': GatewayTimeoutErrorStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof GatewayTimeoutError
     */
    'error': GatewayTimeoutErrorErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof GatewayTimeoutError
     */
    'message': string;
}

type GatewayTimeoutErrorStatusEnum = 504
type GatewayTimeoutErrorErrorEnum = 'Gateway Timeout'


