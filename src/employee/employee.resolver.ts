import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [Employee], {
    name: 'getAllEmployees',
  })
  findAll() {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, {
    name: 'createEmployee',
  })
  create(
    @Args('employee', {
      type: () => CreateEmployeeInput,
    })
    employee: CreateEmployeeInput,
  ) {
    return this.employeeService.create(employee);
  }
}
