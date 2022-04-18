import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Semestre } from './semestre';

@Injectable()
export class SemestreService extends TypeOrmCrudService<Semestre> {
  constructor(@InjectRepository(Semestre) repo) {
    super(repo);
  }
}
