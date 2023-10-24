import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { DashboardConfig } from './dashboard-config.dto';

@InputType()
export class CreateDashboardInput {
  @Field(() => GraphQLJSONObject)
  config: DashboardConfig;
}
