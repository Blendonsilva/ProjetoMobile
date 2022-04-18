import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Disciplina } from './disciplina';

@Injectable()
export class DisciplinaService extends TypeOrmCrudService<Disciplina> {
  constructor(@InjectRepository(Disciplina) repo) {
    super(repo);
  }
}
