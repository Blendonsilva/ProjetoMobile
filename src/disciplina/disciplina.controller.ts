import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Disciplina } from './disciplina';
import { DisciplinaService } from './disciplina.service';

@Crud({
  model: {
    type: Disciplina,
  },
})
@Controller('disciplina')
export class DisciplinaController {
  constructor(public service: DisciplinaService) {}
}
