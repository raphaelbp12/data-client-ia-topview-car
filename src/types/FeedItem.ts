interface FeedItem {
    title: string;
    link: string;
    media: {
        m: string;
    };
    dataTaken: Date;
    description: string;
    published: Date;
    author: string;
    authorId: string;
    tags: string;
}

export default FeedItem;