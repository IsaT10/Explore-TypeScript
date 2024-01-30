export class Player {
  private name: string;
  public age: number;
  readonly country: string;
  readonly skill: string;

  constructor(n: string, a: number, c: string, s: string) {
    this.name = n;
    this.age = a;
    this.country = c;
    this.skill = s;
  }

  play() {
    return `${this.name} from ${this.country} is playing`;
  }
}
