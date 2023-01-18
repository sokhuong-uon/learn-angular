import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products";

export type Shipping = {
	type: string;
	price: number;
};

@Injectable({
	providedIn: "root",
})
export class CartService {
	items: Product[] = [];

	constructor(private http: HttpClient) {}

	addToCart(product: Product) {
		this.items.push(product);
	}

	getItems() {
		return this.items;
	}

	clearCart() {
		this.items = [];
		return this.items;
	}

	getShippingPrice() {
		return this.http.get<Shipping[]>("/assets/shipping.json");
	}
}
