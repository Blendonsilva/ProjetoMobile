import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: number;

  @Column()
  matricula: number;

  @Column()
  materia: string;
}
