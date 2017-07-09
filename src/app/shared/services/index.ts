import { ArticlesService } from './articles/articles.service';
export * from './articles/articles.service';

import { SourcesService } from './sources/sources.service';
export * from './sources/sources.service';

export const SHARED_SERVICES = [
    ArticlesService,
    SourcesService
]
