"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language | null;
        if (saved) setLanguage(saved);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLang = prev === "en" ? "pt" : "en";
            localStorage.setItem("language", newLang);
            return newLang;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside a LanguageProvider");
    }
    return context;
}