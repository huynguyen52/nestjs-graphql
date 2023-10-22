import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogInput } from './dto/create-dog.input';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog)
    private readonly dogRepository: Repository<Dog>,
  ) {}

  create(createDogInput: CreateDogInput) {
    const newDog = this.dogRepository.create(createDogInput);
    return this.dogRepository.save(newDog);
  }

  findAll() {
    return this.dogRepository.find();
  }

  findOne(name: string) {
    return this.dogRepository.findOne({
      where: {
        name,
      },
    });
  }
}
