import { useLanguage } from "@/context/languageContext";
import { PostsData } from "../post"
import { FaAngleDown } from "react-icons/fa";

export default function Highlights() {
    const posts = PostsData.filter(post => post.highlighted);
    const best = posts[0]
    const side = posts.slice(1);

    const { language } = useLanguage()

    return (
        <section className="h-[100dvh] w-full py-16">
            <div className="flex gap-8 w-full h-full py-12">
                <div className="flex relative w-full group hover:scale-[1.008] transition-all overflow-hidden">
                    <img className="absolute w-full h-full object-cover -z-10" src={PostsData[0].squarePicture} />
                    <div className="flex h-full bg-gradient-to-b from-transparent group-hover:bg-black/60 via-transparent to-black/75 transition-colors duration-400 p-5 cursor-pointer">
                        <span className="h-[35%] group-hover:h-[100%] flex flex-col gap-5 mt-auto transition-all duration-400">
                            <h1 className="text-3xl">{best[language].title}</h1>
                            <h1 className="text-xl group-hover:opacity-0 group-hover:hidden opacity-100 transition-all duration-400">{best[language].resume}</h1>
                            {(best[language].content).map((content) => (
                                <h1 className="text-xl group-hover:opacity-100 opacity-0 transition-all duration-600">{content}</h1>
                            ))}
                            <span className="flex text-white group-hover:opacity-100 transition-all duration-300 opacity-0 absolute bottom-0 w-full z-10 lg:h-42 h-32 lg:text-5xl text-4xl">
                                <FaAngleDown className="mx-auto mt-auto" />
                            </span>
                        </span>
                    </div>
                </div>
                <div className="grid relative w-full h-full grid-cols-2 gap-8">
                    {side.map((post, i) => (
                        <div key={i} className="cursor-pointer relative group hover:scale-[1.008] transition-all">
                            <img className="absolute w-full h-full object-cover -z-10" src={post.squarePicture} />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}