import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService extends TypeOrmCrudService<Aluno> {
  constructor(@InjectRepository(Aluno) repo) {
    super(repo);
  }
}
