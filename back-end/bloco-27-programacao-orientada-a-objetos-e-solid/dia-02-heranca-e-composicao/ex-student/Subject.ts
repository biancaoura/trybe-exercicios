export default class Subject {
  constructor(private _name: string) { }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('Name must have at least 3 characters');
    }
  }
}
