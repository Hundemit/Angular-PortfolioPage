import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';
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

  blogPostListings: Entry<TypeBlogPostListingFields>[] = []; // Initialize with an empty array;

  constructor(public contentService: ContentfulService) {}

  getBlogPostListings() {
    this.contentService.getBlogPostListings().subscribe({
      next: (entryCollection) => {
        this.blogPostListings = entryCollection.items;
      },
      complete: () => {
        console.log('Datenstream abgeschlossen');
      },
    });
  }

  getFeaturedImageUrl(entry: Entry<TypeBlogPostListingFields>): string | null {
    const featuredImage = entry.fields.featuredImage;
    return featuredImage?.['fields']?.['file']?.['url'] ?? null; // Nullish Coalescing für mehr Klarheit
  }

  ngOnInit(): void {
    this.getBlogPostListings();
  }
}
