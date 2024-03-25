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
 * @interface UsageListAggregateAccountUsage403Response
 */
export interface UsageListAggregateAccountUsage403Response {
    /**
     * 
     * @type {number}
     * @memberof UsageListAggregateAccountUsage403Response
     */
    'status': UsageListAggregateAccountUsage403ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageListAggregateAccountUsage403Response
     */
    'error': UsageListAggregateAccountUsage403ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof UsageListAggregateAccountUsage403Response
     */
    'message': string;
}

type UsageListAggregateAccountUsage403ResponseStatusEnum = 403
type UsageListAggregateAccountUsage403ResponseErrorEnum = 'Forbidden'


