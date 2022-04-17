import { base as preset } from "@theme-ui/presets";
import { merge, useColorMode, Theme } from "theme-ui";
import { useCallback } from "react";

//全タグの初期設定を行う
export const theme = merge(preset as Theme, {
  styles: {
    root: {
      button: {
        background: "none",
        color: "inherit",
        border: "none",
        padding: 0,
        margin: 0,
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
      },
      a: {
        color: "black",
        textDecoration: "none",
      },
      main: {
        padding: 0,
        margin: 0,
      },
      body: {
        padding: 0,
        margin: 0,
      },
    },
  },
  colors: {
    ...preset.colors,
    // modes: {
    //   dark: dark.colors,
    // },
  },
});

enum ColorMode {
  Default = "default",
  Dark = "dark",
}

export function useToggleColorMode() {
  const [mode, setColorMode] = useColorMode();

  return useCallback(() => {
    const newMode =
      mode === ColorMode.Default ? ColorMode.Dark : ColorMode.Default;
    setColorMode(newMode);
  }, [mode]);
}
