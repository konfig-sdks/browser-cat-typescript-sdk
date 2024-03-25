/* tslint:disable */
/* eslint-disable */
/*
BrowserCat API

Providing purr-fect headless browser access via utility endpoints and direct websocket connections.

The version of the OpenAPI document: 1.0.0
Contact: support@browsercat.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BillingGetActiveSubscription401Response } from '../models';
// @ts-ignore
import { BillingGetActiveSubscription403Response } from '../models';
// @ts-ignore
import { BillingGetActiveSubscription404Response } from '../models';
// @ts-ignore
import { BillingGetActiveSubscription500Response } from '../models';
// @ts-ignore
import { BillingGetActiveSubscriptionResponse } from '../models';
// @ts-ignore
import { BillingGetInvoicePdf400Response } from '../models';
// @ts-ignore
import { BillingGetInvoicePdf401Response } from '../models';
// @ts-ignore
import { BillingGetInvoicePdf403Response } from '../models';
// @ts-ignore
import { BillingGetInvoicePdf404Response } from '../models';
// @ts-ignore
import { BillingGetInvoicePdf500Response } from '../models';
// @ts-ignore
import { BillingGetSpecificInvoice401Response } from '../models';
// @ts-ignore
import { BillingGetSpecificInvoice403Response } from '../models';
// @ts-ignore
import { BillingGetSpecificInvoice404Response } from '../models';
// @ts-ignore
import { BillingGetSpecificInvoice500Response } from '../models';
// @ts-ignore
import { BillingGetSpecificInvoiceResponse } from '../models';
// @ts-ignore
import { BillingGetSpecificSubscription401Response } from '../models';
// @ts-ignore
import { BillingGetSpecificSubscription403Response } from '../models';
// @ts-ignore
import { BillingGetSpecificSubscription404Response } from '../models';
// @ts-ignore
import { BillingGetSpecificSubscription500Response } from '../models';
// @ts-ignore
import { BillingGetSpecificSubscriptionResponse } from '../models';
// @ts-ignore
import { BillingListInvoicesRange401Response } from '../models';
// @ts-ignore
import { BillingListInvoicesRange403Response } from '../models';
// @ts-ignore
import { BillingListInvoicesRange500Response } from '../models';
// @ts-ignore
import { BillingListInvoicesRangeResponse } from '../models';
// @ts-ignore
import { BillingListSubscriptionsWithinRange401Response } from '../models';
// @ts-ignore
import { BillingListSubscriptionsWithinRange403Response } from '../models';
// @ts-ignore
import { BillingListSubscriptionsWithinRange500Response } from '../models';
// @ts-ignore
import { BillingListSubscriptionsWithinRangeResponse } from '../models';
// @ts-ignore
import { Invoice } from '../models';
// @ts-ignore
import { Subscription } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BillingApi - axios parameter creator
 * @export
 */
export const BillingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the primary, active subscription.
         * @summary Get active subscription
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActiveSubscription: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/billing/subscriptions/current`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtCookie required
            await setApiKeyToObject({object: localVarHeaderParameter, type: "Cookie", key: "Cookie", keyParamName: "__SESSION", configuration})
            // authentication keyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Api-Key", keyParamName: "keyHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/billing/subscriptions/current',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get specific invoice PDF.
         * @summary Get PDF receipt for specific invoice
         * @param {string} invId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvoicePdf: async (invId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'invId' is not null or undefined
            assertParamExists('getInvoicePdf', 'invId', invId)
            const localVarPath = `/billing/invoices/{invId}.pdf`
                .replace(`{${"invId"}}`, encodeURIComponent(String(invId !== undefined ? invId : `-invId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtCookie required
            await setApiKeyToObject({object: localVarHeaderParameter, type: "Cookie", key: "Cookie", keyParamName: "__SESSION", configuration})
            // authentication keyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Api-Key", keyParamName: "keyHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/billing/invoices/{invId}.pdf',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get specific invoice info.
         * @summary Get specific invoice
         * @param {string} invId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificInvoice: async (invId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'invId' is not null or undefined
            assertParamExists('getSpecificInvoice', 'invId', invId)
            const localVarPath = `/billing/invoices/{invId}`
                .replace(`{${"invId"}}`, encodeURIComponent(String(invId !== undefined ? invId : `-invId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtCookie required
            await setApiKeyToObject({object: localVarHeaderParameter, type: "Cookie", key: "Cookie", keyParamName: "__SESSION", configuration})
            // authentication keyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Api-Key", keyParamName: "keyHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/billing/invoices/{invId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get specific subscription details.
         * @summary Get specific subscription
         * @param {string} subId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificSubscription: async (subId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'subId' is not null or undefined
            assertParamExists('getSpecificSubscription', 'subId', subId)
            const localVarPath = `/billing/subscriptions/{subId}`
                .replace(`{${"subId"}}`, encodeURIComponent(String(subId !== undefined ? subId : `-subId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtCookie required
            await setApiKeyToObject({object: localVarHeaderParameter, type: "Cookie", key: "Cookie", keyParamName: "__SESSION", configuration})
            // authentication keyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Api-Key", keyParamName: "keyHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/billing/subscriptions/{subId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all invoices (including failed and refunds) within a given time range.
         * @summary List invoices within range
         * @param {number} [limit] 
         * @param {any} [offset] 
         * @param {string} [afterDate] 
         * @param {string} [beforeDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInvoicesRange: async (limit?: number, offset?: any, afterDate?: string, beforeDate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/billing/invoices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtCookie required
            await setApiKeyToObject({object: localVarHeaderParameter, type: "Cookie", key: "Cookie", keyParamName: "__SESSION", configuration})
            // authentication keyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Api-Key", keyParamName: "keyHeader", configuration })
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (afterDate !== undefined) {
                localVarQueryParameter['afterDate'] = (afterDate as any instanceof Date) ?
                    (afterDate as any).toISOString() :
                    afterDate;
            }

            if (beforeDate !== undefined) {
                localVarQueryParameter['beforeDate'] = (beforeDate as any instanceof Date) ?
                    (beforeDate as any).toISOString() :
                    beforeDate;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/billing/invoices',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all current and previous subscriptions within a given time range.
         * @summary List subscriptions within range
         * @param {number} [limit] 
         * @param {any} [offset] 
         * @param {string} [afterDate] 
         * @param {string} [beforeDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionsWithinRange: async (limit?: number, offset?: any, afterDate?: string, beforeDate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/billing/subscriptions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtCookie required
            await setApiKeyToObject({object: localVarHeaderParameter, type: "Cookie", key: "Cookie", keyParamName: "__SESSION", configuration})
            // authentication keyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Api-Key", keyParamName: "keyHeader", configuration })
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (afterDate !== undefined) {
                localVarQueryParameter['afterDate'] = (afterDate as any instanceof Date) ?
                    (afterDate as any).toISOString() :
                    afterDate;
            }

            if (beforeDate !== undefined) {
                localVarQueryParameter['beforeDate'] = (beforeDate as any instanceof Date) ?
                    (beforeDate as any).toISOString() :
                    beforeDate;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/billing/subscriptions',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BillingApi - functional programming interface
 * @export
 */
export const BillingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BillingApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the primary, active subscription.
         * @summary Get active subscription
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActiveSubscription(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Subscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActiveSubscription(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get specific invoice PDF.
         * @summary Get PDF receipt for specific invoice
         * @param {BillingApiGetInvoicePdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInvoicePdf(requestParameters: BillingApiGetInvoicePdfRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Uint8Array | File | buffer.File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvoicePdf(requestParameters.invId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get specific invoice info.
         * @summary Get specific invoice
         * @param {BillingApiGetSpecificInvoiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificInvoice(requestParameters: BillingApiGetSpecificInvoiceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Invoice>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificInvoice(requestParameters.invId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get specific subscription details.
         * @summary Get specific subscription
         * @param {BillingApiGetSpecificSubscriptionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificSubscription(requestParameters: BillingApiGetSpecificSubscriptionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Subscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificSubscription(requestParameters.subId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all invoices (including failed and refunds) within a given time range.
         * @summary List invoices within range
         * @param {BillingApiListInvoicesRangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listInvoicesRange(requestParameters: BillingApiListInvoicesRangeRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Invoice>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listInvoicesRange(requestParameters.limit, requestParameters.offset, requestParameters.afterDate, requestParameters.beforeDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all current and previous subscriptions within a given time range.
         * @summary List subscriptions within range
         * @param {BillingApiListSubscriptionsWithinRangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSubscriptionsWithinRange(requestParameters: BillingApiListSubscriptionsWithinRangeRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Subscription>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSubscriptionsWithinRange(requestParameters.limit, requestParameters.offset, requestParameters.afterDate, requestParameters.beforeDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BillingApi - factory interface
 * @export
 */
export const BillingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BillingApiFp(configuration)
    return {
        /**
         * Get the primary, active subscription.
         * @summary Get active subscription
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActiveSubscription(options?: AxiosRequestConfig): AxiosPromise<Subscription> {
            return localVarFp.getActiveSubscription(options).then((request) => request(axios, basePath));
        },
        /**
         * Get specific invoice PDF.
         * @summary Get PDF receipt for specific invoice
         * @param {BillingApiGetInvoicePdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvoicePdf(requestParameters: BillingApiGetInvoicePdfRequest, options?: AxiosRequestConfig): AxiosPromise<Uint8Array | File | buffer.File> {
            return localVarFp.getInvoicePdf(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get specific invoice info.
         * @summary Get specific invoice
         * @param {BillingApiGetSpecificInvoiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificInvoice(requestParameters: BillingApiGetSpecificInvoiceRequest, options?: AxiosRequestConfig): AxiosPromise<Invoice> {
            return localVarFp.getSpecificInvoice(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get specific subscription details.
         * @summary Get specific subscription
         * @param {BillingApiGetSpecificSubscriptionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificSubscription(requestParameters: BillingApiGetSpecificSubscriptionRequest, options?: AxiosRequestConfig): AxiosPromise<Subscription> {
            return localVarFp.getSpecificSubscription(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all invoices (including failed and refunds) within a given time range.
         * @summary List invoices within range
         * @param {BillingApiListInvoicesRangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInvoicesRange(requestParameters: BillingApiListInvoicesRangeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Invoice>> {
            return localVarFp.listInvoicesRange(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all current and previous subscriptions within a given time range.
         * @summary List subscriptions within range
         * @param {BillingApiListSubscriptionsWithinRangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionsWithinRange(requestParameters: BillingApiListSubscriptionsWithinRangeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Subscription>> {
            return localVarFp.listSubscriptionsWithinRange(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInvoicePdf operation in BillingApi.
 * @export
 * @interface BillingApiGetInvoicePdfRequest
 */
export type BillingApiGetInvoicePdfRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BillingApiGetInvoicePdf
    */
    readonly invId: string
    
}

/**
 * Request parameters for getSpecificInvoice operation in BillingApi.
 * @export
 * @interface BillingApiGetSpecificInvoiceRequest
 */
export type BillingApiGetSpecificInvoiceRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BillingApiGetSpecificInvoice
    */
    readonly invId: string
    
}

/**
 * Request parameters for getSpecificSubscription operation in BillingApi.
 * @export
 * @interface BillingApiGetSpecificSubscriptionRequest
 */
export type BillingApiGetSpecificSubscriptionRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BillingApiGetSpecificSubscription
    */
    readonly subId: string
    
}

/**
 * Request parameters for listInvoicesRange operation in BillingApi.
 * @export
 * @interface BillingApiListInvoicesRangeRequest
 */
export type BillingApiListInvoicesRangeRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof BillingApiListInvoicesRange
    */
    readonly limit?: number
    
    /**
    * 
    * @type {any}
    * @memberof BillingApiListInvoicesRange
    */
    readonly offset?: any
    
    /**
    * 
    * @type {string}
    * @memberof BillingApiListInvoicesRange
    */
    readonly afterDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof BillingApiListInvoicesRange
    */
    readonly beforeDate?: string
    
}

/**
 * Request parameters for listSubscriptionsWithinRange operation in BillingApi.
 * @export
 * @interface BillingApiListSubscriptionsWithinRangeRequest
 */
export type BillingApiListSubscriptionsWithinRangeRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof BillingApiListSubscriptionsWithinRange
    */
    readonly limit?: number
    
    /**
    * 
    * @type {any}
    * @memberof BillingApiListSubscriptionsWithinRange
    */
    readonly offset?: any
    
    /**
    * 
    * @type {string}
    * @memberof BillingApiListSubscriptionsWithinRange
    */
    readonly afterDate?: string
    
    /**
    * 
    * @type {string}
    * @memberof BillingApiListSubscriptionsWithinRange
    */
    readonly beforeDate?: string
    
}

/**
 * BillingApiGenerated - object-oriented interface
 * @export
 * @class BillingApiGenerated
 * @extends {BaseAPI}
 */
export class BillingApiGenerated extends BaseAPI {
    /**
     * Get the primary, active subscription.
     * @summary Get active subscription
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiGenerated
     */
    public getActiveSubscription(options?: AxiosRequestConfig) {
        return BillingApiFp(this.configuration).getActiveSubscription(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get specific invoice PDF.
     * @summary Get PDF receipt for specific invoice
     * @param {BillingApiGetInvoicePdfRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiGenerated
     */
    public getInvoicePdf(requestParameters: BillingApiGetInvoicePdfRequest, options?: AxiosRequestConfig) {
        return BillingApiFp(this.configuration).getInvoicePdf(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get specific invoice info.
     * @summary Get specific invoice
     * @param {BillingApiGetSpecificInvoiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiGenerated
     */
    public getSpecificInvoice(requestParameters: BillingApiGetSpecificInvoiceRequest, options?: AxiosRequestConfig) {
        return BillingApiFp(this.configuration).getSpecificInvoice(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get specific subscription details.
     * @summary Get specific subscription
     * @param {BillingApiGetSpecificSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiGenerated
     */
    public getSpecificSubscription(requestParameters: BillingApiGetSpecificSubscriptionRequest, options?: AxiosRequestConfig) {
        return BillingApiFp(this.configuration).getSpecificSubscription(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all invoices (including failed and refunds) within a given time range.
     * @summary List invoices within range
     * @param {BillingApiListInvoicesRangeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiGenerated
     */
    public listInvoicesRange(requestParameters: BillingApiListInvoicesRangeRequest = {}, options?: AxiosRequestConfig) {
        return BillingApiFp(this.configuration).listInvoicesRange(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all current and previous subscriptions within a given time range.
     * @summary List subscriptions within range
     * @param {BillingApiListSubscriptionsWithinRangeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiGenerated
     */
    public listSubscriptionsWithinRange(requestParameters: BillingApiListSubscriptionsWithinRangeRequest = {}, options?: AxiosRequestConfig) {
        return BillingApiFp(this.configuration).listSubscriptionsWithinRange(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}