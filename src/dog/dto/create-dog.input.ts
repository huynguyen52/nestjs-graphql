import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDogInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  breed: string;
}
