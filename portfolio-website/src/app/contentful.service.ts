import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from '../environments/environment';
import { TypeBlogPostListingFields } from './content-types';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken,
    environment: environment.contentful.environment,
  });
  constructor() {}

  getBlogPostListings(query?: object) {
    return from(
      this.client.getEntries(
        Object.assign(
          {
            content_type: 'pageBlogPost',
          },
          query
        )
      )
    );
  }

  getBlogPostById(BlogPostId: string, query?: any) {
    return from(
      this.client.getEntry<TypeBlogPostListingFields>(BlogPostId, query)
    );
  }
}
