import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="electronics-container">
      <div class="category-header">
        <mat-icon class="category-icon">devices</mat-icon>
        <h1>Electronics</h1>
        <p>Discover the latest in technology and innovation</p>
      </div>

      <div class="subcategories">
        @for (subcategory of subcategories; track subcategory.name) {
          <mat-card class="subcategory-card">
            <div class="card-image" [style.background-image]="'url(' + subcategory.image + ')'">
              <div class="card-overlay">
                <mat-icon>{{ subcategory.icon }}</mat-icon>
              </div>
            </div>
            <div class="card-content">
              <h3>{{ subcategory.name }}</h3>
              <p>{{ subcategory.count }} products</p>
              <button mat-button color="primary">Browse</button>
            </div>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .electronics-container {
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
      .subcategories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 24px;
      }
      .subcategory-card {
        padding: 0;
        text-align: center;
        transition: transform 0.2s ease;
        overflow: hidden;
        border-radius: 12px;
      }
      .subcategory-card:hover {
        transform: translateY(-4px);
      }
      .card-image {
        height: 150px;
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card-overlay {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        padding: 16px;
        backdrop-filter: blur(5px);
      }
      .card-overlay mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        color: white;
      }
      .card-content {
        padding: 24px;
      }
    `,
  ],
})
export class ElectronicsComponent {
  subcategories = [
    {
      name: 'Smartphones',
      icon: 'smartphone',
      count: 245,
      image: 'https://picsum.photos/300/200?random=201',
    },
    {
      name: 'Laptops',
      icon: 'laptop',
      count: 189,
      image: 'https://picsum.photos/300/200?random=202',
    },
    {
      name: 'Headphones',
      icon: 'headphones',
      count: 156,
      image: 'https://picsum.photos/300/200?random=203',
    },
    {
      name: 'Tablets',
      icon: 'tablet',
      count: 98,
      image: 'https://picsum.photos/300/200?random=204',
    },
    {
      name: 'Smart Watches',
      icon: 'watch',
      count: 87,
      image: 'https://picsum.photos/300/200?random=205',
    },
    {
      name: 'Cameras',
      icon: 'camera_alt',
      count: 134,
      image: 'https://picsum.photos/300/200?random=206',
    },
  ];
}
