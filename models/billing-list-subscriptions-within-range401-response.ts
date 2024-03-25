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
 * @interface BillingListSubscriptionsWithinRange401Response
 */
export interface BillingListSubscriptionsWithinRange401Response {
    /**
     * 
     * @type {number}
     * @memberof BillingListSubscriptionsWithinRange401Response
     */
    'status': BillingListSubscriptionsWithinRange401ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingListSubscriptionsWithinRange401Response
     */
    'error': BillingListSubscriptionsWithinRange401ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingListSubscriptionsWithinRange401Response
     */
    'message': string;
}

type BillingListSubscriptionsWithinRange401ResponseStatusEnum = 401
type BillingListSubscriptionsWithinRange401ResponseErrorEnum = 'Unauthorized'

