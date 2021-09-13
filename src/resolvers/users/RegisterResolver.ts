import { User } from "../../entity/user";
import { Arg, Float, Mutation, Query, Resolver } from "type-graphql";
import { UserInput } from "../../inputs/user/UserInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }
  @Mutation(() => User)
  async registerUser(
    @Arg("data")
    {
      cedula,
      nombre,
      pass,
      direccion,
      foto_usuario,
      telefono,
      tipo_usuario,
      fecha_nacimiento,
    }: UserInput
  ): Promise<User> {
    const user = await User.create({
      cedula,
      nombre,
      pass,
      direccion,
      foto_usuario,
      telefono,
      tipo_usuario,
      fecha_nacimiento,
    }).save();
    return user;
  }
  @Query(() => [User])
  async getUsers() {
    const usersList = await User.find();
    return usersList;
  }

  @Query(() => [User])
  async getAllUsers(@Arg("cedula", () => Float) cedula: number) {
    const user = await User.find({ cedula });
    return user;
  }

  //@Mutation(() => User, { nullable: true })
  //async editCi(@Arg("cedula", () => Float) cedula: number) {
  //  const oldCi = await User.find({ cedula });
  //  const newCi = User.create({ cedula });
  //}

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg("cedula", () => Float) cedula: number) {
    const user = await User.delete({ cedula });
    return user;
  }
}
