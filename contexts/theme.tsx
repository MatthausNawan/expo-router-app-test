import { createContext, ReactNode, useState } from "react";

type ThemeProviderType = null | {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemContext = createContext<ThemeProviderType>(null);

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemContext.Provider>
  );
};
