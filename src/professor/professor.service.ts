import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Professor } from './professor';

@Injectable()
export class ProfessorService extends TypeOrmCrudService<Professor> {
  constructor(@InjectRepository(Professor) repo) {
    super(repo);
  }
}
