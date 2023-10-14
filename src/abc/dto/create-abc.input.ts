import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAbcInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
