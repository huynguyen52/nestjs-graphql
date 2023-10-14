import { Injectable } from '@nestjs/common';
import { CreateAbcInput } from './dto/create-abc.input';
import { UpdateAbcInput } from './dto/update-abc.input';

@Injectable()
export class AbcService {
  create(createAbcInput: CreateAbcInput) {
    return 'This action adds a new abc';
  }

  findAll() {
    return `This action returns all abc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abc`;
  }

  update(id: number, updateAbcInput: UpdateAbcInput) {
    return `This action updates a #${id} abc`;
  }

  remove(id: number) {
    return `This action removes a #${id} abc`;
  }
}
