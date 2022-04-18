import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Turma {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  codigo: number;

  @Column()
  materias: string;

  @Column()
  sala: number;
}
