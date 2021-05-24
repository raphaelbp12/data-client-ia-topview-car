import FeedResult from "../types/FeedResult";

const BASE = "//localhost:4040/api";

class FeedAPIImpl {
    async search(query: string): Promise<FeedResult> {
        const response = await fetch(`${BASE}/Feed?tags=${query}`);
        const json = (await response.json()) as FeedResult;

        return json;
    }
}

export const FeedAPI = new FeedAPIImpl();
