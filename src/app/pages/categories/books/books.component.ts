import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
  template: `
    <div class="books-container">
      <div class="category-header">
        <mat-icon class="category-icon">menu_book</mat-icon>
        <h1>Books & Media</h1>
        <p>Discover worlds of knowledge and imagination</p>
      </div>

      <div class="featured-genres">
        <h2>Popular Genres</h2>
        <div class="genres-grid">
          @for (genre of genres; track genre.name) {
            <mat-card class="genre-card">
              <div class="genre-image" [style.background-image]="'url(' + genre.image + ')'">
                <div class="genre-overlay">
                  <mat-icon>{{ genre.icon }}</mat-icon>
                  <h3>{{ genre.name }}</h3>
                  <p>{{ genre.description }}</p>
                  <button mat-raised-button color="primary">Explore {{ genre.name }}</button>
                </div>
              </div>
            </mat-card>
          }
        </div>
      </div>

      <div class="book-categories">
        <h2>Browse Categories</h2>
        <div class="categories-grid">
          @for (category of categories; track category.name) {
            <mat-card class="category-card">
              <mat-icon>{{ category.icon }}</mat-icon>
              <h3>{{ category.name }}</h3>
              <p>{{ category.count }} titles</p>
              <button mat-button color="primary">Browse</button>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .books-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .category-header {
        text-align: center;
        margin-bottom: 40px;
      }
      .category-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        color: var(--mat-sys-primary);
      }
      .featured-genres {
        margin-bottom: 60px;
        text-align: center;
      }
      .genres-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      .genre-card {
        padding: 0;
        overflow: hidden;
        border-radius: 16px;
        height: 260px;
      }
      .genre-image {
        height: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .genre-overlay {
        background: rgba(0, 0, 0, 0.75);
        color: white;
        padding: 28px;
        text-align: center;
        border-radius: 12px;
        backdrop-filter: blur(5px);
        max-width: 280px;
      }
      .genre-overlay mat-icon {
        font-size: 52px;
        width: 52px;
        height: 52px;
        margin-bottom: 16px;
      }
      .book-categories {
        text-align: center;
      }
      .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 24px;
      }
      .category-card {
        padding: 24px;
        text-align: center;
        transition: transform 0.2s ease;
      }
      .category-card:hover {
        transform: translateY(-4px);
      }
      .category-card mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        color: var(--mat-sys-primary);
      }
    `,
  ],
})
export class BooksComponent {
  genres = [
    {
      name: 'Fiction',
      icon: 'auto_stories',
      description: 'Novels, short stories & literature',
      image: 'https://picsum.photos/400/300?random=601',
    },
    {
      name: 'Science & Technology',
      icon: 'science',
      description: 'Latest research & innovations',
      image: 'https://picsum.photos/400/300?random=602',
    },
    {
      name: 'History & Biography',
      icon: 'history_edu',
      description: 'Real stories & historical events',
      image: 'https://picsum.photos/400/300?random=603',
    },
    {
      name: 'Self-Help',
      icon: 'psychology',
      description: 'Personal development & growth',
      image: 'https://picsum.photos/400/300?random=604',
    },
  ];

  categories = [
    { name: 'Bestsellers', icon: 'trending_up', count: 234 },
    { name: 'New Releases', icon: 'new_releases', count: 156 },
    { name: 'E-books', icon: 'tablet', count: 1890 },
    { name: 'Audiobooks', icon: 'headphones', count: 567 },
    { name: "Children's Books", icon: 'child_care', count: 445 },
    { name: 'Academic', icon: 'school', count: 789 },
  ];
}
