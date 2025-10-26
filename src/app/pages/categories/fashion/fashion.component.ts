import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fashion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="fashion-container">
      <div class="fashion-header">
        <mat-icon class="category-icon">checkroom</mat-icon>
        <h1>Fashion</h1>
        <p>Discover the latest trends and timeless classics</p>
      </div>

      <div class="collections">
        @for (collection of collections; track collection.name) {
          <mat-card class="collection-card">
            <div class="card-image" [style.background-image]="'url(' + collection.image + ')'">
              <div class="card-overlay">
                <h3>{{ collection.name }}</h3>
                <p>{{ collection.description }}</p>
                <button mat-raised-button color="primary">Shop Now</button>
              </div>
            </div>
          </mat-card>
        }
      </div>

      <div class="categories">
        <h2>Shop by Category</h2>
        <div class="category-grid">
          @for (category of categories; track category.name) {
            <mat-card class="category-card">
              <mat-icon>{{ category.icon }}</mat-icon>
              <h3>{{ category.name }}</h3>
              <p>{{ category.count }} items</p>
              <button mat-button color="primary">Browse</button>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .fashion-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .fashion-header {
        text-align: center;
        margin-bottom: 40px;
      }
      .category-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        color: var(--mat-sys-primary);
      }
      .collections {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-bottom: 60px;
      }
      .collection-card {
        padding: 0;
        overflow: hidden;
        border-radius: 16px;
        height: 300px;
      }
      .card-image {
        height: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: end;
        position: relative;
      }
      .card-overlay {
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        color: white;
        padding: 24px;
        width: 100%;
        text-align: center;
      }
      .categories {
        text-align: center;
      }
      .category-grid {
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
export class FashionComponent {
  collections = [
    {
      name: 'Summer Collection',
      description: 'Light & breezy styles for the season',
      image: 'https://picsum.photos/400/300?random=301',
    },
    {
      name: 'Formal Wear',
      description: 'Professional attire for every occasion',
      image: 'https://picsum.photos/400/300?random=302',
    },
    {
      name: 'Casual Comfort',
      description: 'Everyday essentials that feel great',
      image: 'https://picsum.photos/400/300?random=303',
    },
  ];

  categories = [
    { name: "Men's Clothing", icon: 'man', count: 1250 },
    { name: "Women's Clothing", icon: 'woman', count: 1890 },
    { name: 'Shoes', icon: 'footprint', count: 567 },
    { name: 'Accessories', icon: 'watch', count: 423 },
    { name: 'Bags', icon: 'shopping_bag', count: 234 },
    { name: 'Jewelry', icon: 'diamond', count: 189 },
  ];
}
