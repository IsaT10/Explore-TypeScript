function drawRectangle(options) {
    const width = options.width;
    const height = options.height;
    return width * height;
}
drawRectangle({
    width: 10,
    height: 20,
});
export class Player {
    constructor(n, a, c, s) {
        this.name = n;
        this.age = a;
        this.country = c;
        this.skill = s;
    }
    play() {
        return `${this.name} from ${this.country} is playing`;
    }
}
