export default class Pokemon {
    constructor(name, type, weight, experience, speed) {
      this.name = name;
      this.type = type;
      this.weight = weight;
      this.experience = experience;
      this.speed = speed;
    }
  
    getInfo() {
      return `${this.name} is of type ${this.type}. Its experience is ${this.experience}, weight is ${this.weight}, and speed is ${this.speed}.`;
    }
  
    feedBerries(amount) {
      if (this.type === 'electric') {
        this.weight += amount * 7;
        this.speed += amount * 0.3;
      } else if (this.type === 'psychic') {
        this.weight += amount;
        this.speed -= amount * 0.2;
      } else {
        this.weight += amount * 5;
        if (this.weight > 100) {
          this.speed -= amount;
        } else {
          this.speed -= amount * 0.5;
        }
      }
    }
  }
  
  export class FirePokemon extends Pokemon {
    constructor(name, weight, experience, speed) {
      super(name, 'fire', weight, experience, speed);
    }
  }
  
  export class GrassPokemon extends Pokemon {
    constructor(name, weight, experience, speed) {
      super(name, 'grass', weight, experience, speed);
    }
  }
  
  export class ElectricPokemon extends Pokemon {
    constructor(name, weight, experience, speed) {
      super(name, 'electric', weight, experience, speed);
    }
  }
  
  export class IcePokemon extends Pokemon {
    constructor(name, weight, experience, speed) {
      super(name, 'ice', weight, experience, speed);
    }
  }
  
  export class PsychicPokemon extends Pokemon {
    constructor(name, weight, experience, speed) {
      super(name, 'psychic', weight, experience, speed);
    }
  }
  