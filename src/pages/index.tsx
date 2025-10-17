import Cover from "@/components/homeComponents/cover";
import Latest from "@/components/homeComponents/latest";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="h-full flex flex-col w-full gap-10">
        <Cover />
        <span className="w-full h-[2px] bg-black dark:bg-white" />
        <Latest />
        <span className="w-full h-[2px] bg-black dark:bg-white" />
      </section>
    </DefaultLayout>
  );
}