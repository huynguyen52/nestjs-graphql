import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DashboardConfig } from '../dto/dashboard-config.dto';

@ObjectType()
@Entity()
export class Dashboard {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => DashboardConfig)
  @Column({ nullable: true, type: 'jsonb' })
  config: DashboardConfig;
}
