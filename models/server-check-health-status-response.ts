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
 * @interface ServerCheckHealthStatusResponse
 */
export interface ServerCheckHealthStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof ServerCheckHealthStatusResponse
     */
    'status': ServerCheckHealthStatusResponseStatusEnum;
    /**
     * Server uptime in seconds
     * @type {number}
     * @memberof ServerCheckHealthStatusResponse
     */
    'uptime': number;
}

type ServerCheckHealthStatusResponseStatusEnum = 'healthy' | 'degraded' | 'unhealthy'


