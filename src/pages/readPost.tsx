import { useLanguage } from "@/context/languageContext";
import DefaultLayout from "@/layouts/default";
import { PostsData } from "@/posts/posts"
import { useParams } from "react-router-dom";

export default function ReadPost() {
    const { id } = useParams();
    const post = PostsData.find((p) => p.id === Number(id));
    const { language } = useLanguage()

    return (
        <DefaultLayout>
            <section className="pt-62">
                {post?.pictureBg ? (
                    <img
                        src={post?.fullPicture}
                        className={`w-[100dvw] h-[100dvh] fixed top-0 left-0 -z-10 object-cover ${post?.pictureBg && "blur-[4px]"
                            }`}
                    />
                ) : (
                    <div
                        className="fixed top-0 left-0 w-[100dvw] h-[100dvh] -z-10 dark:bg-default/50 bg-default"
                        style={{
                            WebkitMaskImage: `url(${post?.icon})`,
                            maskImage: `url(${post?.icon})`,
                            WebkitMaskRepeat: "repeat",
                            maskRepeat: "repeat",
                            WebkitMaskSize: "30px 30px",
                            maskSize: "30px 30px",
                        }}
                    />
                )}
                <div className={`w-full h-full ${post?.pictureBg && "dark:bg-black/85 backdrop-blur-lg bg-default/85"} dark:bg-black/95 bg-default p-5`}>
                    {post ? (
                        <div className="flex flex-col ">
                            <h1>{post[language].title}</h1>
                            <div className="flex flex-col gap-3">
                                {post[language].content.map((content, i) => (
                                    <p key={i} className="indent-4">{content}</p>
                                ))}
                            </div>
                        </div>)
                        : <h1 className="h-[80dvh]">This post doesn't exist...</h1>
                    }
                </div>
            </section>
        </DefaultLayout>
    )
}