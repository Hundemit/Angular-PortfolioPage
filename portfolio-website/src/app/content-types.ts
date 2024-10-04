import * as Contentful from 'contentful';

export interface TypeBlogPostListingFields {
  fields: {
    title?: Contentful.EntryFields.Text;
    blogPost?: Contentful.EntryFields.RichText;
    shortDescription?: Contentful.EntryFields.Text;
    date?: Contentful.EntryFields.Date;
    featuredImage?: Contentful.EntryFields.AssetLink;
  };
  contentTypeId: string;
}

export type TypeBlogPostListing = Contentful.Entry<TypeBlogPostListingFields>;
