
// src/api/APIClient.ts
import { APIRequestContext, APIResponse } from '@playwright/test';
import { ENV } from '../config/env';

export class APIClient {
  private baseURL: string;

  constructor(private request: APIRequestContext) {
    this.baseURL = ENV.API_BASE_URL;
  }

  private buildURL(endpoint: string): string {
    return `${this.baseURL}${endpoint}`;
  }

  async get(endpoint: string, headers = {}): Promise<APIResponse> {
    return this.request.get(this.buildURL(endpoint), { headers });
  }

async post(
    endpoint: string,
    data: any,
    headers: any = {},
    isForm: boolean = false
  ): Promise<APIResponse> {

    const url = this.buildURL(endpoint);
console.log(url);
    if (isForm) {
      return this.request.post(url, {
        form: data, // ✅ IMPORTANT
        headers
      });
    }

    return this.request.post(url, {
      data,
      headers
    });
  }


  async delete(endpoint: string, headers = {}): Promise<APIResponse> {
    return this.request.delete(this.buildURL(endpoint), { headers });
  }
}