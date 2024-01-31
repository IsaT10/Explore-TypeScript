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

// iterface

// function drawRectangle(options: { width: number; height: number }) {
//   const width = options.width;
//   const height = options.height;
// }

// drawRectangle({
//   width: 10,
//   height: 20,
// });

interface OptionsRect {
  width: number;
  height: number;
}

function drawRectangle(options: OptionsRect) {
  const width = options.width;
  const height = options.height;

  return width * height;
}

drawRectangle({
  width: 10,
  height: 20,
});
