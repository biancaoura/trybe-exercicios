// abstract class Character {
//   abstract talk(): void;
//   abstract specialMove(): void;
// }

// class MeleeCharacter extends Character {
//   constructor(private _name: string, private _specialMove: string) {
//     super();
//   }

//   talk(): void {
//     console.log(`I'm ${this._name}`);
//   }

//   specialMove(): void {
//     console.log(this._specialMove);
//   }
// }

// class LongRangeCharacter extends Character {
//   constructor(private _name: string, private _specialMove: string) {
//     super();
//   }

//   talk(): void {
//       console.log(`And I'm ${this._name}`);
//   }

//   specialMove(): void {
//       console.log(this._specialMove);
//   }
// }

// const char = (character: Character) => {
//   character.talk();
//   character.specialMove();
// }

// const melee = new MeleeCharacter('sonic', 'homing attack');
// const longRange = new LongRangeCharacter('pichu', 'thunder jolt');

// char(melee);
// char(longRange);