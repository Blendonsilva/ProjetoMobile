import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semestre: number;

  @Column()
  alunos: string;

  @Column()
  provas: string;

  @Column()
  professor: string;

  @Column()
  notas: number;

  @Column()
  turma: number;
}
