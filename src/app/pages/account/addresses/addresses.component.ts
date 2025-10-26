import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `<div class="page-container">
    <div class="page-header">
      <mat-icon class="page-icon">location_on</mat-icon>
      <h1>Address Book</h1>
      <p>Manage your delivery addresses</p>
    </div>
  </div>`,
  styles: [
    `
      .page-container {
        padding: 40px 20px;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
      }
      .page-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        color: var(--mat-sys-primary);
        margin-bottom: 16px;
      }
      h1 {
        font-size: 2.5rem;
        margin-bottom: 8px;
      }
    `,
  ],
})
export class AddressesComponent {}
