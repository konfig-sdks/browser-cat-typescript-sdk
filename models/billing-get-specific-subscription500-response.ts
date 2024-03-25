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
 * @interface BillingGetSpecificSubscription500Response
 */
export interface BillingGetSpecificSubscription500Response {
    /**
     * 
     * @type {number}
     * @memberof BillingGetSpecificSubscription500Response
     */
    'status': BillingGetSpecificSubscription500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingGetSpecificSubscription500Response
     */
    'error': BillingGetSpecificSubscription500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingGetSpecificSubscription500Response
     */
    'message': string;
}

type BillingGetSpecificSubscription500ResponseStatusEnum = 500
type BillingGetSpecificSubscription500ResponseErrorEnum = 'Internal Server Error'

