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
 * @interface KeyPatch
 */
export interface KeyPatch {
    /**
     * 
     * @type {string}
     * @memberof KeyPatch
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof KeyPatch
     */
    'role'?: KeyPatchRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof KeyPatch
     */
    'expiredAt'?: string;
}

type KeyPatchRoleEnum = 'member' | 'admin'

