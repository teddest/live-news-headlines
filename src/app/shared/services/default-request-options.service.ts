import { Injectable } from '@angular/core';
import { BaseRequestOptions, Http, Headers } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
  headers = new Headers({
    'Accept': 'application/json',
    'X-Api-Key': 'df64d7d709554a1a8ff6517ace8497d2',
  });
}
