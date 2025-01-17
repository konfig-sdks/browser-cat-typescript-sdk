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
 * @interface BillingGetActiveSubscription500Response
 */
export interface BillingGetActiveSubscription500Response {
    /**
     * 
     * @type {number}
     * @memberof BillingGetActiveSubscription500Response
     */
    'status': BillingGetActiveSubscription500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingGetActiveSubscription500Response
     */
    'error': BillingGetActiveSubscription500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingGetActiveSubscription500Response
     */
    'message': string;
}

type BillingGetActiveSubscription500ResponseStatusEnum = 500
type BillingGetActiveSubscription500ResponseErrorEnum = 'Internal Server Error'


