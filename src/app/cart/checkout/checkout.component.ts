import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CartStateService} from "../../shared/data-access/cart-state.service";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export default class CheckoutComponent {
  private cartStateService = inject(CartStateService);

  clearCart() {
    this.cartStateService.getItems().forEach(item => {
      this.cartStateService.state.remove(item.product.id);
    })
  };

}
