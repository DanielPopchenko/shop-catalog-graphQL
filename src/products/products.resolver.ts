import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Product } from './models/products.model';
import { ProductsService } from './products.service';
import { Category } from './models/category.model';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  // ! QUERY - is a way to get data from the database in GraphQL
  @Query(() => [Product])
  products(): Product[] {
    return this.productService.findAll();
  }

  @Query(() => Product, { nullable: true })
  // ! ARGS - is a way to get the id from the query. Not like in the REST where we can get id from /:id
  product(@Args('id', { type: () => ID }) id: string): Product | null {
    return this.productService.findOne(id);
  }

  @Query(() => [Category])
  categories(): Category[] {
    return this.productService.fidAllCategories();
  }
}
