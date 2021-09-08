import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from "class-validator";

import { User } from "../entity/User";

@ValidatorConstraint({ async: true })
export class IsEmailAreadyExistsConstraint
  implements ValidatorConstraintInterface
{
  async validate(email: string) {
    const user = await User.findOne({ where: { email } });
    if (user) return false;
    return true;
  }
}

export function IsEmailAreadyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAreadyExistsConstraint,
    });
  };
}
