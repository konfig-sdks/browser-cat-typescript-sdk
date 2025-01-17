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
 * @interface BillingGetActiveSubscription401Response
 */
export interface BillingGetActiveSubscription401Response {
    /**
     * 
     * @type {number}
     * @memberof BillingGetActiveSubscription401Response
     */
    'status': BillingGetActiveSubscription401ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingGetActiveSubscription401Response
     */
    'error': BillingGetActiveSubscription401ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingGetActiveSubscription401Response
     */
    'message': string;
}

type BillingGetActiveSubscription401ResponseStatusEnum = 401
type BillingGetActiveSubscription401ResponseErrorEnum = 'Unauthorized'


