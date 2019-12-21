export class ResistorColor {
  private colors: string[];
  static readonly COLOR_LIST: ReadonlyArray<string> = [
    "black", "brown", "red", "orange", "yellow",
    "green", "blue", "violet", "grey", "white"];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }

  private colorToNumber = (name: string): number => {
    return ResistorColor.COLOR_LIST.indexOf(name);
  }

  value = (): number => {
    return this.colorToNumber(this.colors[0]) * 10
      + this.colorToNumber(this.colors[1]);
  };
}
