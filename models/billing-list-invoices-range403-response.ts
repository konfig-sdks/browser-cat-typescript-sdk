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
 * @interface BillingListInvoicesRange403Response
 */
export interface BillingListInvoicesRange403Response {
    /**
     * 
     * @type {number}
     * @memberof BillingListInvoicesRange403Response
     */
    'status': BillingListInvoicesRange403ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingListInvoicesRange403Response
     */
    'error': BillingListInvoicesRange403ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingListInvoicesRange403Response
     */
    'message': string;
}

type BillingListInvoicesRange403ResponseStatusEnum = 403
type BillingListInvoicesRange403ResponseErrorEnum = 'Forbidden'


