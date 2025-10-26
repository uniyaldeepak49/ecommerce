import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule, MatChipsModule],
  template: `
    <div class="orders-container">
      <h1>Order History</h1>

      <div class="orders-list">
        @for (order of orders; track order.id) {
          <mat-card class="order-card">
            <mat-card-header>
              <mat-card-title>Order #{{ order.id }}</mat-card-title>
              <mat-card-subtitle>{{ order.date }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="order-info">
                <div class="order-items">
                  @for (item of order.items; track item.name) {
                    <div class="order-item">
                      <mat-icon>{{ item.icon }}</mat-icon>
                      <span>{{ item.name }} x{{ item.quantity }}</span>
                    </div>
                  }
                </div>
                <div class="order-details">
                  <mat-chip-set>
                    <mat-chip>{{ order.status }}</mat-chip>
                  </mat-chip-set>
                  <p class="total">Total: {{ order.total }}</p>
                </div>
              </div>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button>Track Order</button>
              <button mat-button>View Details</button>
            </mat-card-actions>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .orders-container {
        padding: 20px;
        max-width: 1000px;
        margin: 0 auto;
      }
      .orders-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 24px;
      }
      .order-card {
        padding: 16px;
      }
      .order-info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .order-items {
        flex: 1;
      }
      .order-item {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 8px 0;
      }
      .order-details {
        text-align: right;
      }
      .total {
        font-weight: 600;
        margin: 8px 0;
      }
    `,
  ],
})
export class OrdersComponent {
  orders = [
    {
      id: '12345',
      date: 'Dec 15, 2024',
      status: 'Delivered',
      total: '$598',
      items: [
        { name: 'Smartphone Pro', quantity: 1, icon: 'smartphone' },
        { name: 'Phone Case', quantity: 1, icon: 'phone_android' },
      ],
    },
    {
      id: '12344',
      date: 'Dec 10, 2024',
      status: 'Shipped',
      total: '$199',
      items: [{ name: 'Wireless Headphones', quantity: 1, icon: 'headphones' }],
    },
  ];
}
