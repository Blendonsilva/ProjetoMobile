import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from './turma';
import { TurmaController } from './turma.controller';
import { TurmaService } from './turma.service';

@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  controllers: [TurmaController],
  providers: [TurmaService],
})
export class TurmaModule {}
