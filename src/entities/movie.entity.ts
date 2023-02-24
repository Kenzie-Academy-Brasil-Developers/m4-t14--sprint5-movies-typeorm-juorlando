import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  duration: number;

  @Column()
  price: number;

  @CreateDateColumn()
  createAt: string;

  @UpdateDateColumn()
  updateAt: string;

  @DeleteDateColumn()
  deleteAt: string;
}

export { Movie };
