import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { PageClient } from "./client";
import { HydrateClient, trpc } from "@/trpc/server";



const Page = async () =>{
  void trpc.hello.prefetch({ text: "Antonio" });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary  fallback={<p>Error...</p>}>
        <PageClient />
      </ErrorBoundary>
      </Suspense>
     </HydrateClient>

    </div>
  );
}

export default Page;