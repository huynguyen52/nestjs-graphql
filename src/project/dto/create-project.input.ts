import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  code: number;
}
