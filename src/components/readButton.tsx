import { useLanguage } from "@/context/languageContext";
import { useNavigate } from "react-router-dom";

export default function ReadButton({ id }: { id: number }) {
    const navigate = useNavigate();
    const { language } = useLanguage()

    const handleClick = () => {
        navigate(`/post/${id}`);
    };

    return (
        <button onClick={handleClick} className="lg:text-md text-sm px-5 bg-default text-white cursor-pointer transition-all lg:opacity-0 group-hover:opacity-100">
            {language === "en" ? "Read" : "Ler"}
        </button>
    );
}