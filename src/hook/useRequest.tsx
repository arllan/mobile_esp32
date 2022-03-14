import React, {useState} from 'react';
import {api} from '../service/api';
import {AxiosRequestConfig} from 'axios';

export function useRequest() {
  const [status, setStatus] = useState(true);
  const [error, setError] = useState<Error | unknown | null>(null);

  async function useRequestGet(url: string, options?: AxiosRequestConfig) {
    try {
      const request = await api.get(url, options);
      return request;
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setStatus(false);
    }
  }

  async function useRequestPost(url: string, options?: AxiosRequestConfig) {
    try {
      const request = await api.post(url, options);
      return request;
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setStatus(false);
    }
  }

  async function useRequestPut(url: string, options?: AxiosRequestConfig) {
    try {
      const request = await api.put(url, options);
      return request;
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setStatus(false);
    }
  }

  return {
    status,
    error,
    useRequestGet,
    useRequestPost,
    useRequestPut,
  };
}
