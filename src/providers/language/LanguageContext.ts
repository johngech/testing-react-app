import { createContext } from "react";
import { Language } from "./type";

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  getLabel: (labelId: string) => string;
}

const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);

export default LanguageContext;
