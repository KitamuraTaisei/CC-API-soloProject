import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Diary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  location: string;

  @Column()
  with: string;

  @Column()
  score: number;

  @Column()
  comment: string;
}
