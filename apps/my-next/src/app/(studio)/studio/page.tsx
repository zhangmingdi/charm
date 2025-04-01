import { DEFAULT_LIMIT } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";

import { StudioView } from "@/modules/studio/ui/views/studio-view";

export const dynamic = 'force-dynamic'

const Page = async () => {
  // void trpc.studio.getMany.prefetchInfinite({
  //   limit: DEFAULT_LIMIT,
  // });

  return ( 
    <HydrateClient>
      <StudioView />
      123213
    </HydrateClient>
  );
};
 
export default Page;
