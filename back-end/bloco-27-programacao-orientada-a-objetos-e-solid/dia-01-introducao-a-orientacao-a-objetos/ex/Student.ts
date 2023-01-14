class Student {
  private _enrollment: string;
  private _name: string;
  private _testScores: number[] = [];
  private _assignmentScores: number[] = [];

  constructor (enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 2) {
      throw new Error('Name must have at least 2 characters');
    }

    this._name = value;
  }

  get testScores(): number[] {
    return this._testScores;
  }

  set testScores(value: number[]) {
    if (value.length !== 4) {
      throw new Error('There should be only 4 test scores');
    }

    this._testScores = value;
  }

  get assignmentScores(): number[] {
    return this._assignmentScores;
  }

  set assignmentScores(value: number[]) {
    if (value.length !== 2) {
      throw new Error('There should be only 2 assignment scores');
    }

    this._assignmentScores = value;
  }

  sumScores(): number {
    const scores = [...this._testScores, ...this._assignmentScores];

    return scores.reduce((curr, acc) => curr + acc, 0);
  }

  calcAvgScore(): number {
    const sumScores = this.sumScores();
    const scoreAmount = this.testScores.length + this.assignmentScores.length;

    return Math.round(sumScores / scoreAmount);
  }
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.testScores = [25, 20, 23, 23];
personOne.assignmentScores = [50, 40];

console.log(personOne);
console.log('Sum of scores: ', personOne.sumScores());
console.log('Average score: ', personOne.calcAvgScore());
