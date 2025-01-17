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
 * @interface OpenApiExploreFunctionality500Response
 */
export interface OpenApiExploreFunctionality500Response {
    /**
     * 
     * @type {number}
     * @memberof OpenApiExploreFunctionality500Response
     */
    'status': OpenApiExploreFunctionality500ResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof OpenApiExploreFunctionality500Response
     */
    'error': OpenApiExploreFunctionality500ResponseErrorEnum;
    /**
     * Suggestions for debugging the issue
     * @type {string}
     * @memberof OpenApiExploreFunctionality500Response
     */
    'message': string;
}

type OpenApiExploreFunctionality500ResponseStatusEnum = 500
type OpenApiExploreFunctionality500ResponseErrorEnum = 'Internal Server Error'


