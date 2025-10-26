import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthService } from './core/services/auth.service';
import { CartService } from './core/services/cart.service';
import { WishlistService } from './core/services/wishlist.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('ecommerce');
  private authService = inject(AuthService);
  private cartService = inject(CartService);
  private wishlistService = inject(WishlistService);

  ngOnInit() {
    this.authService.checkAuthStatus();
    this.cartService.initializeDemoCart();
    this.wishlistService.initializeDemoWishlist();
  }
}
