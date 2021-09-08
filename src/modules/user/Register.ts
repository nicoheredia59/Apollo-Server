import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { RegisterInput } from "./input/RegisterInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "gelou";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { email, lastName, firstName, password }: RegisterInput
  ): Promise<User> {
    const hashedPass = await bcrypt.hash(password, 15);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPass,
    }).save();

    return user;
  }
}
