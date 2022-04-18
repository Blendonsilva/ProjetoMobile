import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Semestre } from './semestre';
import { SemestreService } from './semestre.service';

@Crud({
  model: {
    type: Semestre,
  },
})
@Controller('semestre')
export class SemestreController {
  constructor(private service: SemestreService) {}
}
