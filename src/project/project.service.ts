import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  create(createProjectInput: CreateProjectInput) {
    const newProject = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(newProject);
  }

  findAll() {
    return this.projectRepository.find({
      relations: ['employees'],
    });
  }

  findOne(id: string) {
    return this.projectRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
