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
 * @interface UsageGetEventData404Response
 */
export interface UsageGetEventData404Response {
    /**
     * 
     * @type {number}
     * @memberof UsageGetEventData404Response
     */
    'status': UsageGetEventData404ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageGetEventData404Response
     */
    'error': UsageGetEventData404ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof UsageGetEventData404Response
     */
    'message': string;
}

type UsageGetEventData404ResponseStatusEnum = 404
type UsageGetEventData404ResponseErrorEnum = 'Not Found'


