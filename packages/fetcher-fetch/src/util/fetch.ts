import {
  IFetchOptions
} from '../types';
import {
  EFetchError
} from '../const';

import createError from './create-error';

/**
 * 「几乎」纯生的 fetch，增加 timeout，且返回到 json 这一层
 * 
 * 引自 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * 
 * The fetch specification differs from jQuery.ajax() in two main ways:
 * 
 * - The Promise returned from `fetch()` won't reject on HTTP error status even if the response is an HTTP 404 or 500.
 *   Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or
 *   if anything prevented the request from completing.
 * - By default, fetch won't send or receive any cookies from the server, resulting in unauthenticated requests if the
 *   site relies on maintaining a user session (to send cookies, the credentials init option must be set).
 * 
 * 引自 https://github.github.io/fetch/
 * 
 * fetch options
 * 
 * - `method` (String) - HTTP request method. GET (Default), POST, PUT, DELETE
 * - `body` (String, body types) - HTTP request body
 * - `headers` (Object, Headers) - Default: {}
 * - `credentials` (String) - Authentication credentials mode. Default: "omit"
 *    + "omit" - don't include authentication credentials (e.g. cookies) in the request
 *    + "same-origin" - include credentials in requests to the same site
 *    + "include" - include credentials in requests to all sites
 */
export default function(url: string, {
  timeout = 0,
  ...fetchOptions
}: IFetchOptions = {}): Promise<Response> {
  const promise = fetch(url, fetchOptions as RequestInit).catch(err => {
    if (err.name === EFetchError.TIMEOUT) {
      throw err;
    }
    
    // URL 不存在或者请求过程被中断（例如刷新页面）会发生此类错误
    // TypeError: "NetworkError when attempting to fetch resource."
    throw createError(EFetchError.NETWORK, err?.message);
  });
  
  return timeout > 0 ? new Promise<Response>((resolve, reject) => {
    const theTimer = window.setTimeout(() => {
      reject(createError(EFetchError.TIMEOUT, `fetch('${url}') timeout after ${timeout}ms`));
    }, timeout);
    
    promise.then((response: Response) => {
      clearTimeout(theTimer);
      resolve(response);
    }, err => {
      clearTimeout(theTimer);
      reject(err);
    });
  }) : promise;
}
