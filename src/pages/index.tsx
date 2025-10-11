import Cover from "@/components/homeComponents/cover";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="h-[600dvh] flex-1 w-full">
        <Cover/>
      </section>
    </DefaultLayout>
  );
}