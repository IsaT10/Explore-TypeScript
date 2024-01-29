export class Player {
  private name: string;
  public age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    return `${this.name} from ${this.country} is playing`;
  }
}
