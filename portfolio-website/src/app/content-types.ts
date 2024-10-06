import * as Contentful from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface TypeBlogPostListingFields {
  fields: {
    title?: String;
    content?: Document;
    shortDescription?: Contentful.EntryFields.Text;
    date?: Contentful.EntryFields.Date;
    featuredImage?: Contentful.EntryFields.AssetLink;
    tags?: Contentful.EntryFields.Text[];
  };
  contentTypeId: string;
}

export type TypeBlogPostListing = Contentful.Entry<TypeBlogPostListingFields>;
