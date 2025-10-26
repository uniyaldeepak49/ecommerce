import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
  template: `
    <div class="sports-container">
      <div class="category-header">
        <mat-icon class="category-icon">sports_soccer</mat-icon>
        <h1>Sports & Fitness</h1>
        <p>Unleash your potential with premium sports equipment</p>
      </div>

      <div class="sports-activities">
        <h2>Shop by Activity</h2>
        <div class="activities-grid">
          @for (activity of activities; track activity.name) {
            <mat-card class="activity-card">
              <div class="activity-image" [style.background-image]="'url(' + activity.image + ')'">
                <div class="activity-overlay">
                  <mat-icon>{{ activity.icon }}</mat-icon>
                  <h3>{{ activity.name }}</h3>
                  <p>{{ activity.description }}</p>
                  <button mat-raised-button color="primary">Shop {{ activity.name }}</button>
                </div>
              </div>
            </mat-card>
          }
        </div>
      </div>

      <div class="equipment-categories">
        <h2>Equipment Categories</h2>
        <div class="equipment-grid">
          @for (equipment of equipmentCategories; track equipment.name) {
            <mat-card class="equipment-card">
              <mat-icon>{{ equipment.icon }}</mat-icon>
              <h3>{{ equipment.name }}</h3>
              <p>{{ equipment.count }} products</p>
              <button mat-button color="primary">Browse</button>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .sports-container {
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
      .sports-activities {
        margin-bottom: 60px;
        text-align: center;
      }
      .activities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      .activity-card {
        padding: 0;
        overflow: hidden;
        border-radius: 16px;
        height: 280px;
      }
      .activity-image {
        height: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .activity-overlay {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 32px;
        text-align: center;
        border-radius: 12px;
        backdrop-filter: blur(5px);
        max-width: 300px;
      }
      .activity-overlay mat-icon {
        font-size: 56px;
        width: 56px;
        height: 56px;
        margin-bottom: 16px;
      }
      .equipment-categories {
        text-align: center;
      }
      .equipment-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 24px;
      }
      .equipment-card {
        padding: 24px;
        text-align: center;
        transition: transform 0.2s ease;
      }
      .equipment-card:hover {
        transform: translateY(-4px);
      }
      .equipment-card mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        color: var(--mat-sys-primary);
      }
    `,
  ],
})
export class SportsComponent {
  activities = [
    {
      name: 'Running',
      icon: 'directions_run',
      description: 'Shoes, apparel & accessories',
      image: 'https://picsum.photos/400/300?random=501',
    },
    {
      name: 'Gym & Fitness',
      icon: 'fitness_center',
      description: 'Weights, machines & gear',
      image: 'https://picsum.photos/400/300?random=502',
    },
    {
      name: 'Swimming',
      icon: 'pool',
      description: 'Swimwear & pool equipment',
      image: 'https://picsum.photos/400/300?random=503',
    },
    {
      name: 'Cycling',
      icon: 'directions_bike',
      description: 'Bikes, helmets & accessories',
      image: 'https://picsum.photos/400/300?random=504',
    },
  ];

  equipmentCategories = [
    { name: 'Athletic Shoes', icon: 'footprint', count: 456 },
    { name: 'Sportswear', icon: 'checkroom', count: 789 },
    { name: 'Fitness Equipment', icon: 'fitness_center', count: 234 },
    { name: 'Team Sports', icon: 'sports_soccer', count: 345 },
    { name: 'Outdoor Gear', icon: 'terrain', count: 567 },
    { name: 'Water Sports', icon: 'surfing', count: 123 },
  ];
}
