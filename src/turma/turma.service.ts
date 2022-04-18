import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Turma } from './turma';

@Injectable()
export class TurmaService extends TypeOrmCrudService<TurmaService> {
  constructor(@InjectRepository(Turma) repo) {
    super(repo);
  }
}
