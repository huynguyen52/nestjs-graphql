import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AbcService } from './abc.service';
import { Abc } from './entities/abc.entity';
import { CreateAbcInput } from './dto/create-abc.input';
import { UpdateAbcInput } from './dto/update-abc.input';

@Resolver(() => Abc)
export class AbcResolver {
  constructor(private readonly abcService: AbcService) {}

  @Mutation(() => Abc)
  createAbc(@Args('createAbcInput') createAbcInput: CreateAbcInput) {
    return this.abcService.create(createAbcInput);
  }

  @Query(() => [Abc], { name: 'abc' })
  findAll() {
    return this.abcService.findAll();
  }

  @Query(() => Abc, { name: 'abc' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.abcService.findOne(id);
  }

  @Mutation(() => Abc)
  updateAbc(@Args('updateAbcInput') updateAbcInput: UpdateAbcInput) {
    return this.abcService.update(updateAbcInput.id, updateAbcInput);
  }

  @Mutation(() => Abc)
  removeAbc(@Args('id', { type: () => Int }) id: number) {
    return this.abcService.remove(id);
  }
}
