import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Semestre } from './semestre';
import { SemestreController } from './semestre.controller';
import { SemestreService } from './semestre.service';

@Module({
  imports: [TypeOrmModule.forFeature([Semestre])],
  controllers: [SemestreController],
  providers: [SemestreService],
})
export class SemestreModule {}
