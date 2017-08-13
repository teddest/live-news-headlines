import { AuthInterceptorService } from './auth-interceptor.service';
export * from './auth-interceptor.service';

import { ArticlesService } from './articles/articles.service';
export { ArticlesService } from './articles/articles.service';

import { SourcesService } from './sources/sources.service';
export { SourcesService, ISource } from './sources/sources.service';

export const SHARED_SERVICES = [
    ArticlesService,
    SourcesService,
    AuthInterceptorService
];
