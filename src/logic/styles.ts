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

export const blogTheme = merge(preset as Theme, {
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
      li: {
        listStyleType: "none",
        position: "relative",
        paddingLeft: "1em",
        paddingBottom: 10,
        marginTop: 10,
        lineHeight: 1.8,
        "::before": {
          borderRadius: "50%",
          width: 10,
          height: 10,
          display: "block",
          position: "absolute",
          left: -2,
          top: "0.6em",
          content: "''",
          background: "#8ed2ff",
        },
      },
      ul: {
        padding: "1em 1em",
        margin: "2em 2em",
        background: "#FFF",
        border: "solid 3px #8ed2ff",
        borderRadius: 10 /*角の丸み*/,
      },
      a: {
        color: "00ff00",
        textDecoration: "none",
      },
      strong: {
        background: `linear-gradient(transparent 80%, #8ed2ff 0%)`,
      },
      p: {
        marginBlockStart: 4,
        marginBlockEnd: 4,
        fontSize: 18,
        fontFamily: "sans-serif",
        fontWeight: 300,
        color: "#555555",
        lineHeight: 2,
      },
      main: {
        padding: 0,
        margin: 0,
      },
      body: {
        padding: 0,
        margin: 0,
      },
      h2: {
        fontSize: 26,
        margin: 0,
        position: "relative",
        padding: 2,
        background: "#8ed2ff",
        borderRadius: 8,
      },
      h3: {
        fontSize: 24,
        margin: 0,
        borderLeftWidth: 8,
        borderBottom: "solid",
        borderColor: "#8ed2ff",
        borderWidth: 5,
      },
      h4: {
        fontSize: 20,
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
