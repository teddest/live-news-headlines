import { AuthInterceptorService } from './auth-interceptor.service';
export * from './auth-interceptor.service';

import { ArticlesService } from './articles/articles.service';
export { ArticlesService, IArticles, IArticle } from './articles/articles.service';

import { SourcesService } from './sources/sources.service';
export { SourcesService, ISources, ISource } from './sources/sources.service';

export const SHARED_SERVICES = [
    ArticlesService,
    SourcesService,
    AuthInterceptorService
];
