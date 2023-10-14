import { Module } from '@nestjs/common';
import { AbcService } from './abc.service';
import { AbcResolver } from './abc.resolver';

@Module({
  providers: [AbcResolver, AbcService],
})
export class AbcModule {}
