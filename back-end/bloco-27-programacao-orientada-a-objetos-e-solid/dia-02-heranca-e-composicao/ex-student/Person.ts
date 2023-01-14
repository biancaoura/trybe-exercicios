export default class Person {
  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  public static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  private validateName(value: string):void {
    if (value.length < 2) {
      throw new Error('Name must have at least 2 characters');
    }
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('The birth date can\t be in the future');
    }

    if (Person.getAge(value) > 120) {
      throw new Error('The person\'s age must be below 120');
    }
  }
}
