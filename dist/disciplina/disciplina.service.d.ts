import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Disciplina } from './disciplina';
export declare class DisciplinaService extends TypeOrmCrudService<Disciplina> {
    constructor(repo: any);
}
