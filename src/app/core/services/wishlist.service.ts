import { Injectable, signal, computed } from '@angular/core';

export interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistItems = signal<WishlistItem[]>([]);

  items = this.wishlistItems.asReadonly();
  count = computed(() => this.wishlistItems().length);

  addToWishlist(product: any) {
    const exists = this.wishlistItems().some((item) => item.id === product.id);
    if (!exists) {
      this.wishlistItems.update((items) => [...items, product]);
    }
  }

  removeFromWishlist(id: number) {
    this.wishlistItems.update((items) => items.filter((item) => item.id !== id));
  }

  isInWishlist(id: number): boolean {
    return this.wishlistItems().some((item) => item.id === id);
  }

  clearWishlist() {
    this.wishlistItems.set([]);
  }

  // Initialize with demo items
  initializeDemoWishlist() {
    this.wishlistItems.set([
      {
        id: 3,
        name: 'Wishlist Item 1',
        price: '$199',
        image: 'https://picsum.photos/200/200?random=103',
      },
      {
        id: 4,
        name: 'Wishlist Item 2',
        price: '$299',
        image: 'https://picsum.photos/200/200?random=104',
      },
    ]);
  }
}
