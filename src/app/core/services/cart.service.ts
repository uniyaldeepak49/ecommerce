import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  items = this.cartItems.asReadonly();
  count = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));
  total = computed(() => {
    return this.cartItems().reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0);
  });

  addToCart(product: any) {
    const existing = this.cartItems().find((item) => item.id === product.id);
    if (existing) {
      this.updateQuantity(product.id, existing.quantity + 1);
    } else {
      this.cartItems.update((items) => [...items, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(id: number) {
    this.cartItems.update((items) => items.filter((item) => item.id !== id));
  }

  updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(id);
      return;
    }
    this.cartItems.update((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }

  // Initialize with demo items
  initializeDemoCart() {
    this.cartItems.set([
      {
        id: 1,
        name: 'Demo Product 1',
        price: '$99',
        image: 'https://picsum.photos/200/200?random=101',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Demo Product 2',
        price: '$149',
        image: 'https://picsum.photos/200/200?random=102',
        quantity: 2,
      },
    ]);
  }
}
