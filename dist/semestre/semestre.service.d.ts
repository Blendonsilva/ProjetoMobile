import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Semestre } from './semestre';
export declare class SemestreService extends TypeOrmCrudService<Semestre> {
    constructor(repo: any);
}
