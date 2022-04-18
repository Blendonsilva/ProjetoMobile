import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorModule } from './professor/professor.module';
import { TurmaModule } from './turma/turma.module';
import { SemestreModule } from './semestre/semestre.module';
import { DisciplinaModule } from './disciplina/disciplina.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AlunoModule,
    ProfessorModule,
    TurmaModule,
    SemestreModule,
    DisciplinaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
