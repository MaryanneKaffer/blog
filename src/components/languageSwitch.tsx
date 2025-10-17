"use client";
import { useLanguage } from "@/context/languageContext";

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage}
            className="h-[23px] dark:bg-white bg-black dark:text-black text-white text-sm font-bold px-1 rounded-sm transition-all cursor-pointer active:scale-[0.8] hover:scale-[1.1]">
            {language.toUpperCase()}
        </button>
    )
}