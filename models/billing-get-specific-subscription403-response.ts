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
 * @interface BillingGetSpecificSubscription403Response
 */
export interface BillingGetSpecificSubscription403Response {
    /**
     * 
     * @type {number}
     * @memberof BillingGetSpecificSubscription403Response
     */
    'status': BillingGetSpecificSubscription403ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingGetSpecificSubscription403Response
     */
    'error': BillingGetSpecificSubscription403ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingGetSpecificSubscription403Response
     */
    'message': string;
}

type BillingGetSpecificSubscription403ResponseStatusEnum = 403
type BillingGetSpecificSubscription403ResponseErrorEnum = 'Forbidden'


