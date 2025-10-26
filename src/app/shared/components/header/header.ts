import { Component, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../core/services/cart.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

interface NavItem {
  label: string;
  icon?: string;
  route?: string;
  externalUrl?: string;
  children?: Array<{
    label: string;
    route?: string;
    externalUrl?: string;
    description?: string;
    image?: string;
  }>;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private cartService = inject(CartService);
  private wishlistService = inject(WishlistService);
  private authService = inject(AuthService);

  // --- Responsive ---
  isHandset = signal(false);
  constructor() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((res) => {
      this.isHandset.set(res.matches);
    });
  }

  brand = 'ShopMate';
  promo = 'Free shipping on orders over ₹999';

  searchCtrl = new FormControl('');
  allSuggestions: string[] = [
    'iPhone 16 Pro Case',
    'Noise Cancelling Headphones',
    'Running Shoes',
    'Mens T‑Shirts',
    'Gaming Laptop',
    'Mechanical Keyboard',
  ];
  filteredSuggestions = computed(() => {
    const q = (this.searchCtrl.value || '').toLowerCase().trim();
    return !q
      ? this.allSuggestions
      : this.allSuggestions.filter((s) => s.toLowerCase().includes(q));
  });

  onSearchEnter() {
    const q = (this.searchCtrl.value || '').trim();
    if (!q) return;
    // Route to your search results page
    // this.router.navigate(['/search'], { queryParams: { q }});
    console.log('Search:', q);
  }

  // --- Cart / Account ---
  cartCount = this.cartService.count;
  wishlistCount = this.wishlistService.count;
  user = this.authService.user;
  isLoggedIn = this.authService.isLoggedIn;

  // --- Currency & Locale ---
  currency = signal('INR');
  country = signal('IN');
  currencies = ['INR', 'USD', 'EUR'];
  countries = [
    { code: 'IN', label: 'India' },
    { code: 'US', label: 'United States' },
    { code: 'AE', label: 'UAE' },
  ];

  // --- Dynamic Navigation ---
  nav: NavItem[] = [
    {
      label: 'Categories',
      icon: 'category',
      children: [
        {
          label: 'Electronics',
          route: '/categories/electronics',
          description: 'Phones, laptops & gadgets',
        },
        { label: 'Fashion', route: '/categories/fashion', description: 'Clothing & accessories' },
        { label: 'Home & Garden', route: '/categories/home', description: 'Furniture & decor' },
        { label: 'Sports', route: '/categories/sports', description: 'Fitness & outdoor gear' },
        { label: 'Books', route: '/categories/books', description: 'Digital & physical books' },
      ],
    },
    {
      label: 'Shopping',
      icon: 'shopping_cart',
      children: [
        { label: 'Product Catalog', route: '/products', description: 'Browse all products' },
        { label: 'Wishlist', route: '/wishlist', description: 'Save favorite items' },
        { label: 'Shopping Cart', route: '/cart', description: 'Review your items' },
      ],
    },
    {
      label: 'Account',
      icon: 'account_circle',
      children: [
        { label: 'My Profile', route: '/profile', description: 'Personal information' },
        { label: 'Order History', route: '/orders', description: 'Track past purchases' },
        { label: 'Address Book', route: '/addresses', description: 'Manage delivery addresses' },
        { label: 'Payment Methods', route: '/payments', description: 'Cards & payment options' },
        { label: 'Reviews & Ratings', route: '/reviews', description: 'Your product feedback' },
      ],
    },
    { label: 'Deals & Offers', icon: 'local_offer', route: '/offers' },
  ];

  // --- Theme toggle (simple) ---
  darkMode = signal(false);
  toggleTheme() {
    this.darkMode.update((v) => !v);
    document.documentElement.classList.toggle('dark-theme', this.darkMode());
  }
  countryLabel = computed(
    () => this.countries.find((c) => c.code === this.country())?.label ?? 'Country',
  );

  currencyLabel = computed(() => this.currency() ?? 'INR');
  headerTopGap = 36 + 64;

  logout() {
    this.authService.logout();
  }

  getCategoryIcon(label: string): string {
    const iconMap: { [key: string]: string } = {
      Electronics: 'devices',
      Fashion: 'checkroom',
      'Home & Garden': 'home',
      Sports: 'sports_soccer',
      Books: 'menu_book',
      'Product Catalog': 'inventory_2',
      'Search & Filter': 'search',
      Wishlist: 'favorite',
      'Compare Products': 'compare_arrows',
      'Shopping Cart': 'shopping_cart',
      'My Profile': 'person',
      'Order History': 'receipt_long',
      'Address Book': 'location_on',
      'Payment Methods': 'payment',
      'Reviews & Ratings': 'star_rate',
    };
    return iconMap[label] || 'category';
  }
}
