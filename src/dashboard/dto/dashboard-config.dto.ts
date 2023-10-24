import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DashboardConfig {
  @Field()
  name: string;

  @Field()
  age: number;
}
