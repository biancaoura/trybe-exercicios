interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  getAll: () => Promise <DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
}

class LocalDbModel implements IModel{
  public async create(character: Character) {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = {
      id: lastId + 1,
      ...character
    };
    db.push(newCharacter);
    return newCharacter;
  }

  public async getAll() {
    return db;
  }

  public findId(id: number) {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  }

  public async getById(id: number) {
    const index = this.findId(id);
    return db[index];
  }

  public async update(id: number, character: Character) {
    const index = this.findId(id);
    db[index] = { id, ...character};
    return db[index];
  }

  public async delete(id: number) {
    const index = this.findId(id);
    const deleted = db.splice(index, 1);
    if (deleted.length > 0) return true;
    return false;
  }
}

const char = new LocalDbModel();

char.create({ name: 'archer', specialMove: 'shoot'});
char.create({ name: 'blacksmith', specialMove: 'forge'});
char.update(1, { name: 'wizard', specialMove: 'spell'});

console.log(char.getAll());