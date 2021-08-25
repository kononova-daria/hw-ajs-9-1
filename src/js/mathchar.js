import Character from './сharacter';

export default class MathChar extends Character {
  constructor(character, type) {
    super(character, type);
    this.stoned = undefined;
    this.distance = undefined;
    this.attack = undefined;
  }

  set stoned(value) {
    this.getStoned = value;
  }

  get stoned() {
    return this.getStoned;
  }

  set attack(value) {
    this.basicAttack = value;
  }

  get attack() {
    if (this.basicAttack > 0) {
      if (this.distance > 0) {
        this.basicAttack = Math.round(this.basicAttack * (1 - (0.1 * (this.distance - 1))));

        if (this.stoned) {
          this.basicAttack = Math.round(this.basicAttack - Math.log2(this.distance) * 5);
        }
      }
    }

    return this.basicAttack;
  }
}
