"use client";
import { useLanguage } from "@/context/languageContext";

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage}
            className="transition-all cursor-pointer active:scale-[0.8] hover:scale-[1.1] ml-auto">
            {language.toUpperCase()}
        </button>
    )
}