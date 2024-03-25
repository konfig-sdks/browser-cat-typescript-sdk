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
 * @interface OpenApiGetSpecJson500Response
 */
export interface OpenApiGetSpecJson500Response {
    /**
     * 
     * @type {number}
     * @memberof OpenApiGetSpecJson500Response
     */
    'status': OpenApiGetSpecJson500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof OpenApiGetSpecJson500Response
     */
    'error': OpenApiGetSpecJson500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof OpenApiGetSpecJson500Response
     */
    'message': string;
}

type OpenApiGetSpecJson500ResponseStatusEnum = 500
type OpenApiGetSpecJson500ResponseErrorEnum = 'Internal Server Error'

