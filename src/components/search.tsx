import { Input } from "@heroui/input";
import { SearchIcon } from "./icons";
import { useLanguage } from "@/context/languageContext";
import { useEffect, useState } from "react";
import { PostsData } from "@/posts/posts"

type Post = typeof PostsData[number]

export default function Search() {
    const { language } = useLanguage()
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<Post[]>([]);

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
            {query && (<div className="w-full h-fit p-3 dark:bg-black/75 bg-default/75 transition-all backdrop-blur-sm absolute top-12.5 flex flex-col z-10">
                {results.length > 0 ? (results.map((post) => (
                    <div className="flex gap-2 transition-all hover:bg-default/40 p-2 cursor-pointer">
                        <img src={post.fullPicture} className="lg:h-12 h-10 object-fit lg:w-22 w-18" />
                        <span className="flex flex-col">
                            <h1 className="lg:text-sm text-[0.8rem]">{post[language].title}</h1>
                            <h1 className="lg:text-sm text-[0.8rem] text-gray-500">{post.tags}</h1>
                        </span>
                    </div>
                )))
                    : results.length === 0 && <p>{language === "pt" ? "Nada encontrado..." : "Nothing found..."}</p>}
            </div>)}
        </div >
    )
}