import { ArticlesService } from './articles/articles.service';
export * from './articles/articles.service';

import { DefaultRequestOptions } from './default-request-options.service';
export * from './default-request-options.service';

import { SourcesService, ISource } from './sources/sources.service';
export * from './sources/sources.service';

export const SHARED_SERVICES = [
    ArticlesService,
    SourcesService
];
