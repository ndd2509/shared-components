import React, { createContext, useContext } from 'react';
import { typographyDefault } from '../../assets/theme';

type dynamicType = {
  [key: string]: any;
};
interface ThemeDynamicPart {
  [key: string]: dynamicType;
}

export interface ThemeContextType extends ThemeDynamicPart {
  typography: dynamicType;
}
export interface IThemeProvider {
  children: React.ReactNode;
  value: ThemeContextType;
}

const DefaultTheme = {
  typography: typographyDefault,
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  DefaultTheme
);

export const ThemeProvider = ({ children, value }: IThemeProvider) => {
  if (!value) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
