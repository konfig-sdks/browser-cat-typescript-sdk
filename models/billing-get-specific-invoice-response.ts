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
 * @interface BillingGetSpecificInvoiceResponse
 */
export interface BillingGetSpecificInvoiceResponse {
    /**
     * 
     * @type {number}
     * @memberof BillingGetSpecificInvoiceResponse
     */
    'status': BillingGetSpecificInvoiceResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingGetSpecificInvoiceResponse
     */
    'error': BillingGetSpecificInvoiceResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingGetSpecificInvoiceResponse
     */
    'message': string;
    /**
     * Where the validation error occurred
     * @type {string}
     * @memberof BillingGetSpecificInvoiceResponse
     */
    'invalid'?: BillingGetSpecificInvoiceResponseInvalidEnum;
    /**
     * Validation errors, when available
     * @type {Array<BadRequestErrorFieldsInner>}
     * @memberof BillingGetSpecificInvoiceResponse
     */
    'fields'?: Array<BadRequestErrorFieldsInner>;
}

type BillingGetSpecificInvoiceResponseStatusEnum = 400
type BillingGetSpecificInvoiceResponseErrorEnum = 'Bad Request'
type BillingGetSpecificInvoiceResponseInvalidEnum = 'body' | 'path' | 'query'

