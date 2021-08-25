const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(character, type) {
    if (character.length < 2 || character.length > 10) {
      throw new Error('Недопустимая длина имени');
    } else {
      this.name = character;
    }

    if (!types.includes(type)) {
      throw new Error('Тип указан неправильно');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
