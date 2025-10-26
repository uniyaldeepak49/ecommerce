import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule, MatChipsModule],
  template: `
    <div class="offers-container">
      <div class="offers-header">
        <mat-icon class="category-icon">local_offer</mat-icon>
        <h1>Deals & Offers</h1>
        <p>Don't miss out on these amazing deals!</p>
      </div>

      <div class="featured-deals">
        <h2>🔥 Hot Deals</h2>
        <div class="deals-grid">
          @for (deal of hotDeals; track deal.id) {
            <mat-card class="deal-card hot-deal">
              <div class="deal-image" [style.background-image]="'url(' + deal.image + ')'">
                <div class="discount-badge">{{ deal.discount }}% OFF</div>
                <div class="deal-timer">{{ deal.timeLeft }}</div>
              </div>
              <div class="deal-content">
                <h3>{{ deal.title }}</h3>
                <p>{{ deal.description }}</p>
                <div class="price-section">
                  <span class="original-price">₹{{ deal.originalPrice }}</span>
                  <span class="sale-price">₹{{ deal.salePrice }}</span>
                </div>
                <button mat-raised-button color="primary">Grab Deal</button>
              </div>
            </mat-card>
          }
        </div>
      </div>

      <div class="category-offers">
        <h2>Category Offers</h2>
        <div class="category-grid">
          @for (offer of categoryOffers; track offer.category) {
            <mat-card class="category-offer-card">
              <mat-icon>{{ offer.icon }}</mat-icon>
              <h3>{{ offer.category }}</h3>
              <div class="offer-details">
                <mat-chip-set>
                  <mat-chip>{{ offer.discount }}</mat-chip>
                </mat-chip-set>
                <p>{{ offer.description }}</p>
              </div>
              <button mat-button color="primary">Shop Now</button>
            </mat-card>
          }
        </div>
      </div>

      <div class="special-promotions">
        <h2>Special Promotions</h2>
        <div class="promotions-grid">
          @for (promo of promotions; track promo.id) {
            <mat-card class="promo-card">
              <div class="promo-header">
                <mat-icon>{{ promo.icon }}</mat-icon>
                <h3>{{ promo.title }}</h3>
              </div>
              <p>{{ promo.description }}</p>
              <div class="promo-code">
                <span
                  >Code: <strong>{{ promo.code }}</strong></span
                >
              </div>
              <button mat-stroked-button color="primary">Copy Code</button>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .offers-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .offers-header {
        text-align: center;
        margin-bottom: 40px;
      }
      .category-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        color: var(--mat-sys-primary);
      }
      .featured-deals {
        margin-bottom: 60px;
        text-align: center;
      }
      .deals-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      .deal-card {
        padding: 0;
        overflow: hidden;
        border-radius: 16px;
        position: relative;
      }
      .hot-deal {
        border: 2px solid #ff6b6b;
        box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
      }
      .deal-image {
        height: 180px;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .discount-badge {
        position: absolute;
        top: 12px;
        left: 12px;
        background: #ff6b6b;
        color: white;
        padding: 8px 12px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 14px;
      }
      .deal-timer {
        position: absolute;
        top: 12px;
        right: 12px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 6px 10px;
        border-radius: 12px;
        font-size: 12px;
      }
      .deal-content {
        padding: 20px;
      }
      .price-section {
        margin: 12px 0;
      }
      .original-price {
        text-decoration: line-through;
        color: #666;
        margin-right: 8px;
      }
      .sale-price {
        font-size: 1.2rem;
        font-weight: 600;
        color: #ff6b6b;
      }
      .category-offers {
        margin-bottom: 60px;
        text-align: center;
      }
      .category-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 24px;
      }
      .category-offer-card {
        padding: 24px;
        text-align: center;
        transition: transform 0.2s ease;
      }
      .category-offer-card:hover {
        transform: translateY(-4px);
      }
      .category-offer-card mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        color: var(--mat-sys-primary);
      }
      .special-promotions {
        text-align: center;
      }
      .promotions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 24px;
      }
      .promo-card {
        padding: 24px;
        text-align: center;
        border: 2px dashed var(--mat-sys-primary);
      }
      .promo-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin-bottom: 16px;
      }
      .promo-header mat-icon {
        color: var(--mat-sys-primary);
      }
      .promo-code {
        background: #f0f0f0;
        padding: 12px;
        border-radius: 8px;
        margin: 16px 0;
        font-family: monospace;
      }
    `,
  ],
})
export class OffersComponent {
  hotDeals = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      description: 'Latest flagship with titanium design',
      discount: 15,
      originalPrice: 134900,
      salePrice: 114665,
      timeLeft: '2h 45m left',
      image: 'https://picsum.photos/300/200?random=701',
    },
    {
      id: 2,
      title: 'Gaming Laptop Bundle',
      description: 'High-performance laptop with accessories',
      discount: 25,
      originalPrice: 89999,
      salePrice: 67499,
      timeLeft: '5h 12m left',
      image: 'https://picsum.photos/300/200?random=702',
    },
    {
      id: 3,
      title: 'Wireless Headphones',
      description: 'Premium noise-cancelling headphones',
      discount: 40,
      originalPrice: 24999,
      salePrice: 14999,
      timeLeft: '1h 30m left',
      image: 'https://picsum.photos/300/200?random=703',
    },
  ];

  categoryOffers = [
    {
      category: 'Electronics',
      icon: 'devices',
      discount: 'Up to 50% OFF',
      description: 'Latest gadgets and tech accessories',
    },
    {
      category: 'Fashion',
      icon: 'checkroom',
      discount: 'Buy 2 Get 1 FREE',
      description: 'Trendy clothing and accessories',
    },
    {
      category: 'Home & Garden',
      icon: 'home',
      discount: '30% OFF',
      description: 'Furniture and home decor items',
    },
    {
      category: 'Sports',
      icon: 'sports_soccer',
      discount: 'Flat ₹1000 OFF',
      description: 'Fitness equipment and sportswear',
    },
  ];

  promotions = [
    {
      id: 1,
      title: 'First Order Discount',
      description: 'Get 20% off on your first purchase above ₹2000',
      code: 'WELCOME20',
      icon: 'card_giftcard',
    },
    {
      id: 2,
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹999',
      code: 'FREESHIP',
      icon: 'local_shipping',
    },
    {
      id: 3,
      title: 'Weekend Special',
      description: 'Extra 15% off on weekend purchases',
      code: 'WEEKEND15',
      icon: 'weekend',
    },
  ];
}
