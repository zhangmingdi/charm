"use client"
import {trpc} from "@/trpc/client"



export const PageClient = ()=>{
    const [data] = trpc.hello.useSuspenseQuery({
        text:"Antonio"
    })
console.log('data',data);

        return (
            <div>
                {data.greeting}
            </div>
        )

}