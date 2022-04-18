import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Professor } from './professor';
export declare class ProfessorService extends TypeOrmCrudService<Professor> {
    constructor(repo: any);
}
