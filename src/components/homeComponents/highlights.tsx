import { useLanguage } from "@/context/languageContext";
import { PostsData } from "../post"

export default function Highlights() {
    const posts = PostsData
        .filter(post => post.highlighted)
        .sort((a, b) => (a.highlighted ?? 0) - (b.highlighted ?? 0));

    const best = posts[0];
    const side = posts.slice(1);

    const { language } = useLanguage()

    return (
        <section className="w-[100%] flex flex-col gap-7 justify-center overflow-hidden py-3">
            <h1 className="text-4xl">{language === "en" ? "Best posts" : "Melhores posts"}</h1>
            <div className="flex gap-7 w-[100%] h-[700px] relative">
                <div className="flex flex-col relative group hover:scale-[1.008] transition-all overflow-hidden dark:bg-default/50 bg-default/75 backdrop-blur-md gap-3 p-5 rounded-xl relative w-[50%]">
                    <img className="object-cover h-[50%]" src={PostsData[0].squarePicture} />
                    <div className="flex h-full cursor-pointer">
                        <span className="flex flex-col transition-all duration-400 text-white">
                            <h1 className="text-3xl dark:text-white text-black">{best[language].title}</h1>
                            <h2 className="text-md leading-tight text-gray-500">{best.tags}</h2>
                            <p className="text-xl opacity-100 transition-all duration-400 text-black">{best[language].resume}</p>
                        </span>
                    </div>
                </div>
                <div className="grid relative w-full h-full grid-cols-2 gap-7">
                    {side.map((post, i) => (
                        <div key={i} className="cursor-pointer relative group hover:scale-[1.008] transition-all relative">
                            <img className="absolute w-full h-full object-cover -z-10" src={post.squarePicture} />
                            <div className="opacity-0 group-hover:opacity-100 bg-black/60 w-full transition-all duration-500 p-5 text-white flex flex-col h-full gap-3">
                                <h1 className="text-2xl">{post[language].title}</h1>
                                <h2 className="text-lg line-clamp-9">{post[language].resume}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}