import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
  ],
  template: `
    <div class="catalog-container">
      <div class="catalog-header">
        <h1>Product Catalog</h1>
        <p>Discover our complete range of products</p>
      </div>

      <div class="products-grid">
        @for (product of products; track product.id) {
          <mat-card class="product-card">
            <div class="product-image">
              <img [src]="product.image" [alt]="product.name" />
              @if (product.badge) {
                <mat-chip-set class="badge">
                  <mat-chip>{{ product.badge }}</mat-chip>
                </mat-chip-set>
              }
            </div>
            <mat-card-content>
              <h3>{{ product.name }}</h3>
              <p class="price">{{ product.price }}</p>
              <p class="description">{{ product.description }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary">View Details</button>
              <button mat-icon-button><mat-icon>favorite_border</mat-icon></button>
              <button mat-icon-button><mat-icon>add_shopping_cart</mat-icon></button>
            </mat-card-actions>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .catalog-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .catalog-header {
        text-align: center;
        margin-bottom: 40px;
      }
      .catalog-header h1 {
        font-size: 2.5rem;
        margin-bottom: 8px;
      }
      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
      }
      .product-card {
        transition: transform 0.2s ease;
      }
      .product-card:hover {
        transform: translateY(-4px);
      }
      .product-image {
        position: relative;
        text-align: center;
        padding: 40px;
        background: var(--mat-sys-surface-variant);
      }
      .product-image img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
      }
      .badge {
        position: absolute;
        top: 8px;
        right: 8px;
      }
      .price {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--mat-sys-primary);
      }
      .description {
        color: var(--mat-sys-on-surface-variant);
      }
    `,
  ],
})
export class ProductCatalogComponent {
  products = [
    {
      id: 1,
      name: 'Smartphone Pro',
      price: '$899',
      description: 'Latest flagship smartphone',
      image: 'https://picsum.photos/300/300?random=21',
      badge: 'New',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: '$199',
      description: 'Premium noise-canceling',
      image: 'https://picsum.photos/300/300?random=22',
      badge: 'Sale',
    },
    {
      id: 3,
      name: 'Gaming Laptop',
      price: '$1299',
      description: 'High-performance gaming',
      image: 'https://picsum.photos/300/300?random=23',
      badge: null,
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: '$299',
      description: 'Fitness tracking smartwatch',
      image: 'https://picsum.photos/300/300?random=24',
      badge: 'Popular',
    },
    {
      id: 5,
      name: 'Tablet Pro',
      price: '$599',
      description: 'Professional tablet device',
      image: 'https://picsum.photos/300/300?random=25',
      badge: null,
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      price: '$79',
      description: 'Portable wireless speaker',
      image: 'https://picsum.photos/300/300?random=26',
      badge: 'Sale',
    },
  ];
}
