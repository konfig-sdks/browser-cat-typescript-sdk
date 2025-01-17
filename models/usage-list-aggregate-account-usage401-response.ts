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
 * @interface UsageListAggregateAccountUsage401Response
 */
export interface UsageListAggregateAccountUsage401Response {
    /**
     * 
     * @type {number}
     * @memberof UsageListAggregateAccountUsage401Response
     */
    'status': UsageListAggregateAccountUsage401ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageListAggregateAccountUsage401Response
     */
    'error': UsageListAggregateAccountUsage401ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof UsageListAggregateAccountUsage401Response
     */
    'message': string;
}

type UsageListAggregateAccountUsage401ResponseStatusEnum = 401
type UsageListAggregateAccountUsage401ResponseErrorEnum = 'Unauthorized'


