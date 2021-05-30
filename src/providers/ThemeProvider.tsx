import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core";
import React, { useMemo } from "react";
import { CreateTheme } from "themes/theme";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  const injectTheme = useMemo(() => {
    return CreateTheme;
  }, []);

  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={injectTheme}>
        <EmotionThemeProvider theme={injectTheme}>
          {children}
        </EmotionThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
};
