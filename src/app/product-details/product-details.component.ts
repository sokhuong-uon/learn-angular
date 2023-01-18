import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { Product, products } from "../products";

@Component({
	selector: "app-product-details",
	templateUrl: "./product-details.component.html",
})
export class ProductDetailsComponent implements OnInit {
	product: Product | undefined;

	constructor(
		private route: ActivatedRoute,
		private cartService: CartService
	) {}

	addToCart(product: Product) {
		this.cartService.addToCart(product);
		window.alert("Your product have been added to the cart!");
	}

	ngOnInit(): void {
		// Get product id
		const routeParams = this.route.snapshot.paramMap;
		const productIdFromRoute = Number(routeParams.get("productId"));

		// Find the product that correspond to the id
		this.product = products.find(
			(product) => product.id === productIdFromRoute
		);
	}
}
