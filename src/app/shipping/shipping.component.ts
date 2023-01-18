import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "../cart.service";
import { Shipping } from "../cart.service";

@Component({
	selector: "app-shipping",
	templateUrl: "./shipping.component.html",
	styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
	constructor(private cartService: CartService) {}

	shippingCosts!: Observable<Shipping[]>;

	ngOnInit(): void {
		this.shippingCosts = this.cartService.getShippingPrice();
	}
}
