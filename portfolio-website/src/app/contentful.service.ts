import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from '../environments/environment';
import { TypeBlogPostListingFields } from './content-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

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

  getTags(entry: Entry<TypeBlogPostListingFields>): string[] {
    if (Array.isArray(entry.fields.tags)) {
      return entry.fields.tags.filter((tag) => typeof tag === 'string'); // Filtere nur Strings
    }
    return [];
  }

  getDocumentToHtmlString(blogContent: Document | undefined) {
    if (blogContent) {
      return documentToHtmlString(blogContent);
    }
    return null;
  }

  getFeaturedImageUrl(entry: Entry<TypeBlogPostListingFields>): string | null {
    const featuredImage = entry.fields.featuredImage;
    return featuredImage?.['fields']?.['file']?.['url'] ?? null; // Nullish Coalescing für mehr Klarheit
  }

  getBlogPostById(BlogPostId: string, query?: any) {
    return from(
      this.client.getEntry<TypeBlogPostListingFields>(BlogPostId, query)
    );
  }

  transformBlogContent(blogPost: Entry<TypeBlogPostListingFields>) {
    const content =
      (blogPost?.fields?.content?.['content'] as unknown as any[]) || [];

    const contentItems = content.reduce((acc, item) => {
      if (item.nodeType === 'paragraph') {
        acc.push({ type: 'paragraph', value: item.content[0].value });
      } else if (item.nodeType === 'embedded-entry-block') {
        acc.push({
          type: 'image',
          url: item.data.target.fields.image.fields.file.url,
        });
      }
      return acc;
    }, []);

    return contentItems;
  }
}
