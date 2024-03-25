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
 * @interface BillingListSubscriptionsWithinRange403Response
 */
export interface BillingListSubscriptionsWithinRange403Response {
    /**
     * 
     * @type {number}
     * @memberof BillingListSubscriptionsWithinRange403Response
     */
    'status': BillingListSubscriptionsWithinRange403ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingListSubscriptionsWithinRange403Response
     */
    'error': BillingListSubscriptionsWithinRange403ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingListSubscriptionsWithinRange403Response
     */
    'message': string;
}

type BillingListSubscriptionsWithinRange403ResponseStatusEnum = 403
type BillingListSubscriptionsWithinRange403ResponseErrorEnum = 'Forbidden'


