import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Professor } from './professor';
import { ProfessorService } from './professor.service';

@Crud({
  model: {
    type: Professor,
  },
})
@Controller('professor')
export class ProfessorController {
  constructor(public service: ProfessorService) {}
}
