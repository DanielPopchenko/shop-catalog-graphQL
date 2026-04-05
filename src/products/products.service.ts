import { Injectable } from '@nestjs/common';
import { Product } from './models/products.model';
import { Seller } from './models/seller.model';
import { Category } from './models/category.model';

// Here os gonna be all of the methods which we are gonna triget in the resolver
@Injectable()
export class ProductsService {
  private sellers: Seller[] = [
    { id: '1', name: 'Seller 1', rating: 4.5 },
    { id: '2', name: 'Seller 2', rating: 4.7 },
    { id: '3', name: 'Seller 3', rating: 4.9 },
  ];

  private categories: Category[] = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
  ];

  private products = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      sellerId: '1',
      categoryId: '1',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      sellerId: '2',
      categoryId: '2',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
      sellerId: '3',
      categoryId: '3',
    },
  ];

  findAll(): Product[] {
    return this.products.map((product) => this.enrichProduct(product));
  }

  findOne(id: string): Product | null {
    return this.products.find((product) => product.id === id) ?? null;
  }

  private enrichProduct(product: (typeof this.products)[number]): Product {
    return {
      ...product,
      seller: this.sellers.find((seller) => seller.id === product.sellerId)!,
      category: this.categories.find(
        (category) => category.id === product.categoryId,
      )!,
    };
  }

  fidAllCategories(): Category[] {
    return this.categories;
  }
}
