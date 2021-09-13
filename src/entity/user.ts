import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from "typeorm";
import { Material } from "./material";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn()
  cedula: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  pass: string;

  @Field()
  @Column()
  direccion: string;

  @Field()
  @Column()
  foto_usuario: string;

  @Field()
  @Column()
  telefono: number;

  @Field()
  @Column()
  tipo_usuario: string;

  @Field()
  @Column({ type: "timestamp" })
  fecha_nacimiento: Date;

  @ManyToMany(() => Material, (material) => material.id_material)
  @JoinTable()
  reserva: [Material];
}
