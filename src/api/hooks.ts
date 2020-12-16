import { useCallback, useRef, useState } from "react";
import WPClient from "./methods";

const wpClient = new WPClient();

export const usePosts = (include?: number[]) => {
    const [page, setPage] = useState<number>(1);
    const [posts, setPosts] = useState(null as unknown as any[]);
    const ref = useRef(null as unknown as RefApi);

    

    if(ref.current === null) {
        const fetchData = 
            async (pge: number = 1) => {
                const pg = ["page", pge];
                const maxPg = ["per_page", 2];
                const inc = include ? ["include", include.join(",")] : undefined;
                const args = [inc, pg, maxPg].filter(arg => arg !== undefined)  as [string, string][];
    
                setPosts(await wpClient.getData("posts", args))
            }

        const nextPage = () => {setPage(p => { fetchData(p + 1); return p + 1})}
        const prevPage = () => {setPage(p => { fetchData(p - 1); return p - 1})}

        ref.current = [posts, fetchData, nextPage, prevPage];
        fetchData();
    }
    ref.current[0] = posts;

    return ref.current;
}

type RefApi = [any[], (page?: number) => void, () => void, () => void];