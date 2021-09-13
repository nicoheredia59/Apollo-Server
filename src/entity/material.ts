import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Material extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id_material: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  etiqueta: string;

  @Field()
  @Column()
  categoria: string;

  @Field()
  @Column()
  descripcion: string;

  @Field()
  @Column()
  cantidad: number;

  @Field()
  @Column()
  foto: string;

  @Field()
  @Column()
  estado: string;
}
