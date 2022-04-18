import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Turma } from './turma';
import { TurmaService } from './turma.service';

@Crud({
  model: {
    type: Turma,
  },
})
@Controller('turma')
export class TurmaController {
  constructor(public service: TurmaService) {}
}
