import { v4 as uuid, validate as uuidValidate } from "uuid";

import { InvalidUuidError } from "../../@seedwork/errors/invalid-uuid.error";

export class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuid();

    this.validate();
  }

  validate() {
    const is_valid = uuidValidate(this.id);

    if (!is_valid) {
      throw new InvalidUuidError();
    }
  }
}
