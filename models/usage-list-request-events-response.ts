/*
BrowserCat API

Providing purr-fect headless browser access via utility endpoints and direct websocket connections.

The version of the OpenAPI document: 1.0.0
Contact: support@browsercat.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BadRequestErrorFieldsInner } from './bad-request-error-fields-inner';

/**
 * 
 * @export
 * @interface UsageListRequestEventsResponse
 */
export interface UsageListRequestEventsResponse {
    /**
     * 
     * @type {number}
     * @memberof UsageListRequestEventsResponse
     */
    'status': UsageListRequestEventsResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageListRequestEventsResponse
     */
    'error': UsageListRequestEventsResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof UsageListRequestEventsResponse
     */
    'message': string;
    /**
     * Where the validation error occurred
     * @type {string}
     * @memberof UsageListRequestEventsResponse
     */
    'invalid'?: UsageListRequestEventsResponseInvalidEnum;
    /**
     * Validation errors, when available
     * @type {Array<BadRequestErrorFieldsInner>}
     * @memberof UsageListRequestEventsResponse
     */
    'fields'?: Array<BadRequestErrorFieldsInner>;
}

type UsageListRequestEventsResponseStatusEnum = 400
type UsageListRequestEventsResponseErrorEnum = 'Bad Request'
type UsageListRequestEventsResponseInvalidEnum = 'body' | 'path' | 'query'


