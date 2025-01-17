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
 * @interface ApiKeysListAllResponse
 */
export interface ApiKeysListAllResponse {
    /**
     * 
     * @type {number}
     * @memberof ApiKeysListAllResponse
     */
    'status': ApiKeysListAllResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiKeysListAllResponse
     */
    'error': ApiKeysListAllResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof ApiKeysListAllResponse
     */
    'message': string;
    /**
     * Where the validation error occurred
     * @type {string}
     * @memberof ApiKeysListAllResponse
     */
    'invalid'?: ApiKeysListAllResponseInvalidEnum;
    /**
     * Validation errors, when available
     * @type {Array<BadRequestErrorFieldsInner>}
     * @memberof ApiKeysListAllResponse
     */
    'fields'?: Array<BadRequestErrorFieldsInner>;
}

type ApiKeysListAllResponseStatusEnum = 400
type ApiKeysListAllResponseErrorEnum = 'Bad Request'
type ApiKeysListAllResponseInvalidEnum = 'body' | 'path' | 'query'


