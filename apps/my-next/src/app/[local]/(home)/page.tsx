import { trpc } from "@/trpc/server";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

const DataComponent = async () => {
  const data = await trpc.hello({ text: "hello1" });
  return <div>I am going to load video {data.greeting}</div>;
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}
