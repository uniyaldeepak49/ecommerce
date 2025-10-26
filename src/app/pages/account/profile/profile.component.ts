import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <div class="profile-container">
      <h1>My Profile</h1>

      <div class="profile-content">
        <mat-card class="profile-info">
          <mat-card-header>
            <mat-icon mat-card-avatar>person</mat-icon>
            <mat-card-title>Personal Information</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="form-grid">
              <mat-form-field>
                <mat-label>First Name</mat-label>
                <input matInput value="John" />
              </mat-form-field>
              <mat-form-field>
                <mat-label>Last Name</mat-label>
                <input matInput value="Doe" />
              </mat-form-field>
              <mat-form-field>
                <mat-label>Email</mat-label>
                <input matInput value="john.doe@example.com" />
              </mat-form-field>
              <mat-form-field>
                <mat-label>Phone</mat-label>
                <input matInput value="+1 234 567 8900" />
              </mat-form-field>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary">Update Profile</button>
          </mat-card-actions>
        </mat-card>

        <div class="profile-stats">
          @for (stat of stats; track stat.label) {
            <mat-card class="stat-card">
              <mat-icon>{{ stat.icon }}</mat-icon>
              <h3>{{ stat.value }}</h3>
              <p>{{ stat.label }}</p>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .profile-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .profile-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;
        margin-top: 24px;
      }
      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .profile-stats {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .stat-card {
        padding: 20px;
        text-align: center;
      }
      .stat-card mat-icon {
        font-size: 32px;
        width: 32px;
        height: 32px;
        margin-bottom: 8px;
      }
      .stat-card h3 {
        margin: 0;
        font-size: 1.5rem;
      }
      @media (max-width: 768px) {
        .profile-content {
          grid-template-columns: 1fr;
        }
        .form-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ProfileComponent {
  stats = [
    { label: 'Total Orders', value: '24', icon: 'shopping_bag' },
    { label: 'Wishlist Items', value: '12', icon: 'favorite' },
    { label: 'Reviews Written', value: '8', icon: 'star' },
    { label: 'Member Since', value: '2023', icon: 'calendar_today' },
  ];
}
