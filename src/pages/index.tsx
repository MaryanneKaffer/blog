import Cover from "@/components/homeComponents/cover";
import Highlights from "@/components/homeComponents/highlights";
import Latest from "@/components/homeComponents/latest";
import Others from "@/components/homeComponents/others";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const divider = <span className="w-full h-[2px] bg-black dark:bg-white" />
  return (
    <DefaultLayout>
      <section className="h-full flex flex-col w-full lg:gap-18 gap-12">
        <Cover />
        {divider}
        <Latest />
        {divider}
        <Highlights />
        {divider}
        <Others />
        {divider}
      </section>
    </DefaultLayout>
  );
}