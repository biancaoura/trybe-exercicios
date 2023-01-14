import Person from './Person';
export default class Student extends Person {
  private _enrollment: string;
  private _testScores: number[];
  private _assignmentScores: number[];

  constructor (
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = '';
    this._testScores = [];
    this._assignmentScores = [];

    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('Enrollment must have at least 16 characters');
    }

    this._enrollment = value;
  }

  get testScores(): number[] {
    return this._testScores;
  }

  set testScores(value: number[]) {
    if (value.length > 4) {
      throw new Error('There should only be 4 test scores');
    }

    this._testScores = value;
  }

  get assignmentScores(): number[] {
    return this._assignmentScores;
  }

  set assignmentScores(value: number[]) {
    if (value.length > 2) {
      throw new Error('There should only be 2 assignment scores');
    }

    this._assignmentScores = value;
  }

  public generateEnrollment(): string {
    const random = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${random}`;
  }
}
