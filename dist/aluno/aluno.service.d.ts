import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Aluno } from './aluno';
export declare class AlunoService extends TypeOrmCrudService<Aluno> {
    constructor(repo: any);
}
