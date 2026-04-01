export type SyntaxTheme = {
  name: string;
};

export class ColorDiff {
  constructor(patch: any, firstLine: string | null, filePath: string, fileContent: string | null) {}
  format(input: string): string {
    return input;
  }
  render(theme: string, width: number, dim: boolean): string[] | null {
    return null;
  }
}

export class ColorFile {
  format(input: string): string {
    return input;
  }
}

export function getSyntaxTheme(themeName: string): SyntaxTheme {
  return { name: themeName };
}
