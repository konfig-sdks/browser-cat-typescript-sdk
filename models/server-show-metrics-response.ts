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
 * @interface ServerShowMetricsResponse
 */
export interface ServerShowMetricsResponse {
    /**
     * 
     * @type {number}
     * @memberof ServerShowMetricsResponse
     */
    'status': ServerShowMetricsResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ServerShowMetricsResponse
     */
    'error': ServerShowMetricsResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ServerShowMetricsResponse
     */
    'message': string;
}

type ServerShowMetricsResponseStatusEnum = 404
type ServerShowMetricsResponseErrorEnum = 'Not Found'


