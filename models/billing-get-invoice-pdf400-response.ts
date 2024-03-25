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
 * @interface BillingGetInvoicePdf400Response
 */
export interface BillingGetInvoicePdf400Response {
    /**
     * 
     * @type {number}
     * @memberof BillingGetInvoicePdf400Response
     */
    'status': BillingGetInvoicePdf400ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingGetInvoicePdf400Response
     */
    'error': BillingGetInvoicePdf400ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof BillingGetInvoicePdf400Response
     */
    'message': string;
    /**
     * Where the validation error occurred
     * @type {string}
     * @memberof BillingGetInvoicePdf400Response
     */
    'invalid'?: BillingGetInvoicePdf400ResponseInvalidEnum;
    /**
     * Validation errors, when available
     * @type {Array<BadRequestErrorFieldsInner>}
     * @memberof BillingGetInvoicePdf400Response
     */
    'fields'?: Array<BadRequestErrorFieldsInner>;
}

type BillingGetInvoicePdf400ResponseStatusEnum = 400
type BillingGetInvoicePdf400ResponseErrorEnum = 'Bad Request'
type BillingGetInvoicePdf400ResponseInvalidEnum = 'body' | 'path' | 'query'

