import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    ProductCardComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('featuredSlider') featuredSlider!: ElementRef;
  @ViewChild('bestsellersSlider') bestsellersSlider!: ElementRef;
  features = [
    {
      title: 'Electronics',
      subtitle: 'Latest Tech',
      description:
        'Discover cutting-edge electronics, smartphones, laptops, and gadgets from top brands.',
      icon: 'devices',
      route: '/categories/electronics',
    },
    {
      title: 'Fashion',
      subtitle: 'Trendy Styles',
      description:
        'Explore the latest fashion trends for men and women with premium quality clothing.',
      icon: 'checkroom',
      route: '/categories/fashion',
    },
    {
      title: 'Home & Garden',
      subtitle: 'Comfort Living',
      description: 'Transform your space with beautiful furniture, decor, and garden essentials.',
      icon: 'home',
      route: '/categories/home',
    },
    {
      title: 'Sports & Fitness',
      subtitle: 'Active Lifestyle',
      description: 'Get fit with our premium sports equipment and fitness gear for all activities.',
      icon: 'sports_soccer',
      route: '/categories/sports',
    },
    {
      title: 'Books & Media',
      subtitle: 'Knowledge Hub',
      description:
        'Expand your mind with our vast collection of books, audiobooks, and digital content.',
      icon: 'menu_book',
      route: '/categories/books',
    },
    {
      title: 'Smart Shopping',
      subtitle: 'AI-Powered',
      description: 'Use our advanced search and comparison tools to find exactly what you need.',
      icon: 'search',
      route: '/search',
    },
  ];

  categories = [
    {
      name: 'Electronics',
      icon: 'devices',
      count: '2,450',
      route: '/categories/electronics',
      image: 'https://picsum.photos/400/300?random=101',
    },
    {
      name: 'Fashion',
      icon: 'checkroom',
      count: '5,230',
      route: '/categories/fashion',
      image: 'https://picsum.photos/400/300?random=102',
    },
    {
      name: 'Home & Garden',
      icon: 'home',
      count: '1,890',
      route: '/categories/home',
      image: 'https://picsum.photos/400/300?random=103',
    },
    {
      name: 'Sports',
      icon: 'sports_soccer',
      count: '980',
      route: '/categories/sports',
      image: 'https://picsum.photos/400/300?random=104',
    },
    {
      name: 'Books',
      icon: 'menu_book',
      count: '3,450',
      route: '/categories/books',
      image: 'https://picsum.photos/400/300?random=105',
    },
  ];

  quickActions = [
    { title: 'View Cart', icon: 'shopping_cart', route: '/cart' },
    { title: 'My Wishlist', icon: 'favorite', route: '/wishlist' },
    { title: 'Track Orders', icon: 'local_shipping', route: '/orders' },
    { title: 'My Profile', icon: 'person', route: '/profile' },
    { title: 'Special Offers', icon: 'local_offer', route: '/offers' },
    { title: 'Compare Products', icon: 'compare_arrows', route: '/compare' },
  ];

  featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: '$999',
      rating: 5,
      image: 'https://picsum.photos/200/200?random=1',
      badge: 'New',
    },
    {
      id: 2,
      name: 'MacBook Air M3',
      price: '$1199',
      rating: 5,
      image: 'https://picsum.photos/200/200?random=2',
      badge: 'Popular',
    },
    {
      id: 3,
      name: 'AirPods Pro',
      price: '$249',
      rating: 4,
      image: 'https://picsum.photos/200/200?random=3',
      badge: null,
    },
    {
      id: 4,
      name: 'iPad Pro',
      price: '$799',
      rating: 5,
      image: 'https://picsum.photos/200/200?random=4',
      badge: 'Sale',
    },
    {
      id: 5,
      name: 'Apple Watch',
      price: '$399',
      rating: 4,
      image: 'https://picsum.photos/200/200?random=5',
      badge: null,
    },
    {
      id: 6,
      name: 'Studio Display',
      price: '$1599',
      rating: 4,
      image: 'https://picsum.photos/200/200?random=6',
      badge: 'Premium',
    },
  ];

  bestSellers = [
    {
      id: 7,
      name: 'Samsung Galaxy S24',
      price: '$799',
      rating: 4,
      image: 'https://picsum.photos/200/200?random=7',
      badge: 'Hot',
    },
    {
      id: 8,
      name: 'Dell XPS 13',
      price: '$999',
      rating: 4,
      image: 'https://picsum.photos/200/200?random=8',
      badge: null,
    },
    {
      id: 9,
      name: 'Sony WH-1000XM5',
      price: '$299',
      rating: 5,
      image: 'https://picsum.photos/200/200?random=9',
      badge: 'Best Seller',
    },
    {
      id: 10,
      name: 'Nintendo Switch',
      price: '$299',
      rating: 5,
      image: 'https://picsum.photos/200/200?random=10',
      badge: 'Popular',
    },
    {
      id: 11,
      name: 'Kindle Oasis',
      price: '$249',
      rating: 4,
      image: 'https://picsum.photos/200/200?random=11',
      badge: null,
    },
    {
      id: 12,
      name: 'Echo Dot',
      price: '$49',
      rating: 4,
      image: 'https://picsum.photos/200/200?random=12',
      badge: 'Sale',
    },
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.setupScrollAnimations();
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  private setupScrollAnimations() {
    window.addEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        section.classList.add('animate-in');
      }
    });
  };

  scrollSlider(sliderId: string, direction: number) {
    let slider: HTMLElement;
    if (sliderId === 'featured') {
      slider = this.featuredSlider.nativeElement;
    } else {
      slider = this.bestsellersSlider.nativeElement;
    }
    const scrollAmount = 300;
    slider.scrollLeft += direction * scrollAmount;
  }
}
