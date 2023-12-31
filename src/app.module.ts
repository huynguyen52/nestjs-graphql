import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { DogModule } from './dog/dog.module';
import { EmployeeModule } from './employee/employee.module';
import { PostModule } from './post/post.module';
import { ProjectModule } from './project/project.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'graphql',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    EmployeeModule,
    PostModule,
    ProjectModule,
    DogModule,
    DashboardModule,
  ],
  controllers: [],
})
export class AppModule {}
