import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  projectId: string;
}
