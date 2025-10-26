import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
  template: `
    <div class="wishlist-container">
      <div class="wishlist-header">
        <h1>My Wishlist</h1>
        <p>{{ wishlistItems.length }} items saved</p>
      </div>

      <div class="wishlist-grid">
        @for (item of wishlistItems; track item.id) {
          <mat-card class="wishlist-item">
            <div class="item-image">
              <img [src]="item.image" [alt]="item.name" />
            </div>
            <mat-card-content>
              <h3>{{ item.name }}</h3>
              <p class="price">{{ item.price }}</p>
              <p class="description">{{ item.description }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">Add to Cart</button>
              <button mat-icon-button color="warn">
                <mat-icon>delete</mat-icon>
              </button>
            </mat-card-actions>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .wishlist-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .wishlist-header {
        text-align: center;
        margin-bottom: 40px;
      }
      .wishlist-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
      }
      .wishlist-item {
        transition: transform 0.2s ease;
      }
      .wishlist-item:hover {
        transform: translateY(-4px);
      }
      .item-image {
        text-align: center;
        padding: 40px;
        background: var(--mat-sys-surface-variant);
      }
      .item-image img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
      }
      .price {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--mat-sys-primary);
      }
    `,
  ],
})
export class WishlistComponent {
  wishlistItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$199',
      description: 'Premium noise-canceling',
      image: 'https://picsum.photos/300/300?random=31',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$299',
      description: 'Fitness tracking smartwatch',
      image: 'https://picsum.photos/300/300?random=32',
    },
    {
      id: 3,
      name: 'Gaming Laptop',
      price: '$1299',
      description: 'High-performance gaming',
      image: 'https://picsum.photos/300/300?random=33',
    },
  ];
}
