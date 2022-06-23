// GAME ACTIONS SIMULATOR - SIMULAR BATALHA DE JOGO
// PARTE I - CALCULAR DMG DE 3 CHAR

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// EXERCÍCIO 1 - DANO DO DRAGÃO
const dragonDmg = () => Math.floor(Math.random() * ((dragon.strength + 1) - 15) + 15);

// EXERCÍCIO 2 - DANO DO WARRIOR
const maxWarriorDmg = warrior.strength * warrior.weaponDmg;
const warrStr = warrior.strength;

const warriorDmg = () => Math.floor(Math.random() * ((maxWarriorDmg + 1) - warrStr) + warrStr);

// EXERCÍCIO 3 - OBJ C/ DANO E MANA DO MAGO
const mageInt = mage.intelligence;

const mageDmg = () => {
  const dmg = Math.floor(Math.random() * ((mageInt * 2 + 1) - mageInt) + mageInt);
  let { mana } = mage;

  if (mana < 15) return 'Não possui mana suficiente';
  mana -= 15;
  return { damage: dmg, mana };
};
