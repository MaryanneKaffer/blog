import { Input } from "@heroui/input";
import { SearchIcon } from "./icons";
import { useLanguage } from "@/context/languageContext";
import { useEffect } from "react";
import { PostsData } from "@/posts/posts"

export type Post = typeof PostsData[number]
type SearchProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setResults: React.Dispatch<React.SetStateAction<Post[]>>;
};

export default function Search({ query, setQuery, setResults, }: SearchProps) {
    const { language } = useLanguage()

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const filtered = PostsData.filter((post) =>
            post[language].title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 12);

        setResults(filtered);
    }, [query, language]);

    return (
        <div className="lg:w-[40%] w-[80%] relative">
            < Input
                value={query}
                isClearable
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-sm",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "cursor-text!",
                    ],
                }
                }
                placeholder={language === "pt" ? "Procurar..." : "Search..."}
                radius="full"
                onChange={(e) => setQuery(e.target.value)}
                onClear={() => setQuery("")}
                startContent={
                    < SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none shrink-0" />
                }
            />
        </div >
    )
}