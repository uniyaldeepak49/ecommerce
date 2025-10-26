import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
    <div class="cart-container">
      <h1>Shopping Cart</h1>

      <div class="cart-content">
        <div class="cart-items">
          @for (item of cartItems; track item.id) {
            <mat-card class="cart-item">
              <div class="item-info">
                <mat-icon class="item-icon">{{ item.icon }}</mat-icon>
                <div class="item-details">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.description }}</p>
                  <div class="quantity-controls">
                    <button mat-icon-button><mat-icon>remove</mat-icon></button>
                    <span>{{ item.quantity }}</span>
                    <button mat-icon-button><mat-icon>add</mat-icon></button>
                  </div>
                </div>
                <div class="item-price">
                  <p class="price">{{ item.price }}</p>
                  <button mat-icon-button color="warn"><mat-icon>delete</mat-icon></button>
                </div>
              </div>
            </mat-card>
          }
        </div>

        <div class="cart-summary">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Order Summary</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>$1,397</span>
              </div>
              <div class="summary-row">
                <span>Shipping:</span>
                <span>$15</span>
              </div>
              <div class="summary-row">
                <span>Tax:</span>
                <span>$112</span>
              </div>
              <mat-divider></mat-divider>
              <div class="summary-row total">
                <span>Total:</span>
                <span>$1,524</span>
              </div>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary" class="checkout-btn">
                Proceed to Checkout
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .cart-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .cart-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;
        margin-top: 24px;
      }
      .cart-items {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .cart-item {
        padding: 16px;
      }
      .item-info {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .item-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
      }
      .item-details {
        flex: 1;
      }
      .item-details h3 {
        margin: 0 0 8px 0;
      }
      .quantity-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
      }
      .item-price {
        text-align: right;
      }
      .price {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
      }
      .summary-row {
        display: flex;
        justify-content: space-between;
        margin: 8px 0;
      }
      .total {
        font-weight: 600;
        font-size: 1.1rem;
      }
      .checkout-btn {
        width: 100%;
      }
      @media (max-width: 768px) {
        .cart-content {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class CartComponent {
  cartItems = [
    {
      id: 1,
      name: 'Smartphone Pro',
      description: 'Latest flagship smartphone',
      price: '$899',
      quantity: 1,
      icon: 'smartphone',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      description: 'Premium noise-canceling',
      price: '$199',
      quantity: 2,
      icon: 'headphones',
    },
    {
      id: 3,
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch',
      price: '$299',
      quantity: 1,
      icon: 'watch',
    },
  ];
}
