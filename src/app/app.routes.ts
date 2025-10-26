import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'categories/electronics',
    loadComponent: () =>
      import('./pages/categories/electronics/electronics.component').then(
        (m) => m.ElectronicsComponent,
      ),
  },
  {
    path: 'categories/fashion',
    loadComponent: () =>
      import('./pages/categories/fashion/fashion.component').then((m) => m.FashionComponent),
  },
  {
    path: 'categories/home',
    loadComponent: () =>
      import('./pages/categories/home-garden/home-garden.component').then(
        (m) => m.HomeGardenComponent,
      ),
  },
  {
    path: 'categories/sports',
    loadComponent: () =>
      import('./pages/categories/sports/sports.component').then((m) => m.SportsComponent),
  },
  {
    path: 'categories/books',
    loadComponent: () =>
      import('./pages/categories/books/books.component').then((m) => m.BooksComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/product-catalog/product-catalog.component').then(
        (m) => m.ProductCatalogComponent,
      ),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/products/search-filter/search-filter.component').then(
        (m) => m.SearchFilterComponent,
      ),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./pages/shopping/wishlist/wishlist.component').then((m) => m.WishlistComponent),
  },
  {
    path: 'compare',
    loadComponent: () =>
      import('./pages/shopping/compare/compare.component').then((m) => m.CompareComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/shopping/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/account/profile/profile.component').then((m) => m.ProfileComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./pages/account/orders/orders.component').then((m) => m.OrdersComponent),
  },
  {
    path: 'addresses',
    loadComponent: () =>
      import('./pages/account/addresses/addresses.component').then((m) => m.AddressesComponent),
  },
  {
    path: 'payments',
    loadComponent: () =>
      import('./pages/account/payments/payments.component').then((m) => m.PaymentsComponent),
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./pages/account/reviews/reviews.component').then((m) => m.ReviewsComponent),
  },
  {
    path: 'offers',
    loadComponent: () => import('./pages/offers/offers.component').then((m) => m.OffersComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then((m) => m.LoginComponent),
  },
  { path: '**', redirectTo: '' },
];
