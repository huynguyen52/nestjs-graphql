import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly emmployeeRepository: Repository<Employee>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  findAll() {
    return this.emmployeeRepository.find({
      relations: ['project'],
    });
  }

  async create(employee: CreateEmployeeInput) {
    const project = await this.projectRepository.findOne({
      where: {
        id: employee.projectId,
      },
    });
    const newEmployee = this.emmployeeRepository.create(employee);
    newEmployee.project = project;
    return this.emmployeeRepository.save(newEmployee);
  }
}
