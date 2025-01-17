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
 * @interface UsageSessionPublic
 */
export interface UsageSessionPublic {
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'usageSessionId': string;
    /**
     * 
     * @type {any}
     * @memberof UsageSessionPublic
     */
    'clerkOrgId': any;
    /**
     * 
     * @type {any}
     * @memberof UsageSessionPublic
     */
    'clerkUserId': any;
    /**
     * 
     * @type {any}
     * @memberof UsageSessionPublic
     */
    'keyId': any;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'method': UsageSessionPublicMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'endpoint': string;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'status': UsageSessionPublicStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'machineId': string;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'machineRegion': string;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'browserType': UsageSessionPublicBrowserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'browserVersion': string;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'agentType': UsageSessionPublicAgentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'agentVersion': string;
    /**
     * 
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'startedAt': string;
    /**
     * 
     * @type {any}
     * @memberof UsageSessionPublic
     */
    'endedAt': any;
    /**
     * UsageSession ID
     * @type {string}
     * @memberof UsageSessionPublic
     */
    'sessionId': string;
}

type UsageSessionPublicMethodEnum = 'api' | 'ws'
type UsageSessionPublicStatusEnum = 'pending' | 'success' | 'failure'
type UsageSessionPublicBrowserTypeEnum = 'chromium' | 'firefox' | 'webkit' | 'chrome' | 'chrome-beta' | 'msedge' | 'msedge-beta' | 'msedge-dev'
type UsageSessionPublicAgentTypeEnum = 'playwright' | 'puppeteer' | 'selenium'


