import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Seller {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Float)
  rating?: number | null;
}
