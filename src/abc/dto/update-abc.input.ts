import { CreateAbcInput } from './create-abc.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAbcInput extends PartialType(CreateAbcInput) {
  @Field(() => Int)
  id: number;
}
