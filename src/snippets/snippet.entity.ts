import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Snippets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Untitled' })
  name: string;

  @Column()
  code: string;
}
