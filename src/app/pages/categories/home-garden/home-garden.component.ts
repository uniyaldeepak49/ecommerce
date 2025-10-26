import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-garden',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
  template: `
    <div class="home-garden-container">
      <div class="category-header">
        <mat-icon class="category-icon">home</mat-icon>
        <h1>Home & Garden</h1>
        <p>Create your perfect living space with style and comfort</p>
      </div>

      <div class="featured-rooms">
        <h2>Shop by Room</h2>
        <div class="rooms-grid">
          @for (room of rooms; track room.name) {
            <mat-card class="room-card">
              <div class="room-image" [style.background-image]="'url(' + room.image + ')'">
                <div class="room-overlay">
                  <mat-icon>{{ room.icon }}</mat-icon>
                  <h3>{{ room.name }}</h3>
                  <button mat-raised-button color="primary">Shop {{ room.name }}</button>
                </div>
              </div>
            </mat-card>
          }
        </div>
      </div>

      <div class="categories">
        <h2>Popular Categories</h2>
        <div class="category-grid">
          @for (category of categories; track category.name) {
            <mat-card class="category-card">
              <mat-icon>{{ category.icon }}</mat-icon>
              <h3>{{ category.name }}</h3>
              <p>{{ category.count }} products</p>
              <button mat-button color="primary">Browse</button>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .home-garden-container {
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
      .featured-rooms {
        margin-bottom: 60px;
        text-align: center;
      }
      .rooms-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      .room-card {
        padding: 0;
        overflow: hidden;
        border-radius: 16px;
        height: 250px;
      }
      .room-image {
        height: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .room-overlay {
        background: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 24px;
        text-align: center;
        border-radius: 12px;
        backdrop-filter: blur(5px);
      }
      .room-overlay mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 12px;
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
export class HomeGardenComponent {
  rooms = [
    {
      name: 'Living Room',
      icon: 'weekend',
      image: 'https://picsum.photos/400/300?random=401',
    },
    {
      name: 'Bedroom',
      icon: 'bed',
      image: 'https://picsum.photos/400/300?random=402',
    },
    {
      name: 'Kitchen',
      icon: 'kitchen',
      image: 'https://picsum.photos/400/300?random=403',
    },
    {
      name: 'Garden',
      icon: 'yard',
      image: 'https://picsum.photos/400/300?random=404',
    },
  ];

  categories = [
    { name: 'Furniture', icon: 'chair', count: 892 },
    { name: 'Lighting', icon: 'lightbulb', count: 456 },
    { name: 'Decor', icon: 'palette', count: 634 },
    { name: 'Storage', icon: 'inventory_2', count: 321 },
    { name: 'Garden Tools', icon: 'grass', count: 234 },
    { name: 'Appliances', icon: 'microwave', count: 567 },
  ];
}
