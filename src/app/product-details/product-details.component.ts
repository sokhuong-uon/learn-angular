import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";

@Component({
	selector: "app-product-details",
	templateUrl: "./product-details.component.html",
})
export class ProductDetailsComponent implements OnInit {
	product: Product | undefined;

	constructor(private route: ActivatedRoute) {}

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
