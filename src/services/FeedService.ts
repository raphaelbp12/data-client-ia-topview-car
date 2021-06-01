import FeedResult from "../types/FeedResult";

const BASE = "//localhost:5000/api";

class FeedAPIImpl {
    async search(query: string): Promise<FeedResult> {
        const response = await fetch(`${BASE}/History`, {
            method: 'POST',
            body: JSON.stringify({popIds: [1, 3], trackIds: [-1]}),
            headers: {'Content-Type': 'application/json; charset=UTF-8', 'Accept': 'application/json, text/plain, */*'}
        });
        const json = (await response.json()) as FeedResult;

        return json;
    }
}

export const FeedAPI = new FeedAPIImpl();
