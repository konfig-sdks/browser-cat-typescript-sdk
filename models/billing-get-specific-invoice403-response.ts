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
 * @interface BillingGetSpecificInvoice403Response
 */
export interface BillingGetSpecificInvoice403Response {
    /**
     * 
     * @type {number}
     * @memberof BillingGetSpecificInvoice403Response
     */
    'status': BillingGetSpecificInvoice403ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingGetSpecificInvoice403Response
     */
    'error': BillingGetSpecificInvoice403ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingGetSpecificInvoice403Response
     */
    'message': string;
}

type BillingGetSpecificInvoice403ResponseStatusEnum = 403
type BillingGetSpecificInvoice403ResponseErrorEnum = 'Forbidden'


