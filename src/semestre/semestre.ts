import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Semestre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semestre: number;

  @Column()
  turmas: string;

  @Column()
  materias: string;

  @Column()
  professores: string;

  @Column()
  avaliacoe: number;
}
