import FeedItem from "./FeedItem";

interface FeedResult {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: FeedItem[];
}

export default FeedResult;