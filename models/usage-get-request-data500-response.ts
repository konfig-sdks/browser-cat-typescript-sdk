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
 * @interface UsageGetRequestData500Response
 */
export interface UsageGetRequestData500Response {
    /**
     * 
     * @type {number}
     * @memberof UsageGetRequestData500Response
     */
    'status': UsageGetRequestData500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageGetRequestData500Response
     */
    'error': UsageGetRequestData500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof UsageGetRequestData500Response
     */
    'message': string;
}

type UsageGetRequestData500ResponseStatusEnum = 500
type UsageGetRequestData500ResponseErrorEnum = 'Internal Server Error'


