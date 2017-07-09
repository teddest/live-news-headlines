import { ArticlesService } from './articles/articles.service';
export { ArticlesService } from './articles/articles.service';

import { DefaultRequestOptions } from './default-request-options.service';
export { DefaultRequestOptions } from './default-request-options.service';

import { SourcesService } from './sources/sources.service';
export { SourcesService, ISource } from './sources/sources.service';

export const SHARED_SERVICES = [
    ArticlesService,
    SourcesService
];
