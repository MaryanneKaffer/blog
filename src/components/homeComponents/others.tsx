import { useLanguage } from "@/context/languageContext";
import { PostsData } from "@/posts/posts"
import ReadButton from "../readButton";

export default function Others() {
    const posts = PostsData.filter(post => !post.highlighted).slice(1, 12)

    const { language } = useLanguage()

    return (
        <section className="w-[100%] flex flex-col gap-7">
            <h1 className="lg:text-4xl text-3xl">{language === "en" ? "Other posts" : "Outros posts"}</h1>
            <div className="flex flex-wrap w-full relative">
                {posts.map((post, i) => (
                    <div key={i} className="lg:w-[20%] w-[50%] relative group hover:scale-[1.008] lg:bg-transparent bg-default/45 transition-all relative hover:dark:bg-default/40 hover:bg-default/50 backdrop-blur-md lg:p-5 p-2">
                        <img className="object-cover lg:h-[200px]" src={post.fullPicture} />
                        <div className="w-full transition-all duration-400 flex flex-col h-full">
                            <h1 className="lg:text-xl text-md dark:text-white text-black">{post[language].title}</h1>
                            <h2 className="lg:text-sm text-[0.7rem] leading-tight text-gray-500 lg:mb-2 mb-1 text-black">{post.tags}</h2>
                            <p className="lg:text-sm text-[0.7rem] line-clamp-8">{post[language].resume}</p>
                            <span className="flex justify-between lg:mt-4 mt-2">
                                <h2 className="lg:text-sm text-[0.7rem] text-sm leading-tight text-gray-500">{post.date}</h2>
                                <ReadButton id={post.id} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}