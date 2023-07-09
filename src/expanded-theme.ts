declare module "@mui/material/styles/createPalette" {
  interface PaletteColor extends Palette {
    [key: number]: string;
  }
  type PaletteKey = keyof {
    [Key in keyof Palette as Palette[Key] extends PaletteColor
      ? Key
      : never]: true;
  };

  interface Palette {
    tertiary: PaletteColor;
  }
}
