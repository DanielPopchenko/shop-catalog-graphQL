import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Seller } from './seller.model';
import { Category } from './category.model';

// ! OBJECT TYPE - says that this is a type that GraphQL will understand
@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => Float)
  price: number;

  @Field(() => Seller)
  seller: Seller;

  @Field(() => Category)
  category: Category;
}
