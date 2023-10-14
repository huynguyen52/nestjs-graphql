import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Abc {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
