import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentfulService } from './contentful.service';
import * as Contentful from 'contentful';
import { CommonModule } from '@angular/common'; // Füge dies hinzu
import { TypeBlogPostListingFields } from './content-types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-website';

  blogPostListings: Contentful.Entry<TypeBlogPostListingFields>[] = []; // Initialize with an empty array;
  blogPost!: Contentful.Entry<TypeBlogPostListingFields>;
  blogPost2!: Contentful.Entry<TypeBlogPostListingFields>;
  blogContent!: Document | undefined;
  contentItems: any[] = []; // Speichert Paragraphs und Bilder in der richtigen Reihenfolge

  constructor(public contentService: ContentfulService) {}

  getBlogPostListings() {
    this.contentService.getBlogPostListings().subscribe({
      next: (entryCollection) => {
        this.blogPostListings = entryCollection.items;

        this.blogPostListings.forEach((el) => {
          console.log(el.fields?.content);
        });
      },
      complete: () => {
        console.log('Datenstream abgeschlossen');
      },
    });
  }

  getBlogPostById(blogPostId: string) {
    this.contentService.getBlogPostById(blogPostId).subscribe({
      next: (entry: Contentful.Entry<TypeBlogPostListingFields>) => {
        this.blogPost = entry;
        this.blogContent = this.blogPost.fields.content as Document | undefined;
        this.contentItems = this.contentService.transformBlogContent(
          this.blogPost
        );
      },
      error: (err) => {
        console.error('Fehler beim Laden des Blogposts:', err);
      },
    });
  }

  getDocumentToHtmlString(blogContent: Document | undefined) {
    // return this.contentService.getDocumentToHtmlString(this.blogContent);
  }

  getFeaturedImageUrl(
    entry: Contentful.Entry<TypeBlogPostListingFields>
  ): string | null {
    return this.contentService.getFeaturedImageUrl(entry);
  }

  getTags(entry: Contentful.Entry<TypeBlogPostListingFields>): string[] {
    return this.contentService.getTags(entry);
  }

  ngOnInit(): void {
    this.getBlogPostListings();
    this.getBlogPostById('4YpnxRJ6o0uhD0pxY7hHRF');
  }
}
