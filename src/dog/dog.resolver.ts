import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DogService } from './dog.service';
import { Dog } from './entities/dog.entity';
import { CreateDogInput } from './dto/create-dog.input';

@Resolver(() => Dog)
export class DogResolver {
  constructor(private readonly dogService: DogService) {}

  @Mutation(() => Dog)
  createDog(@Args('createDogInput') createDogInput: CreateDogInput) {
    return this.dogService.create(createDogInput);
  }

  @Query(() => [Dog], { name: 'getAllDogs' })
  findAll() {
    return this.dogService.findAll();
  }

  @Query(() => Dog, { name: 'dog' })
  findOne(@Args('name', { type: () => String, nullable: true }) name: string) {
    return this.dogService.findOne(name);
  }
}
