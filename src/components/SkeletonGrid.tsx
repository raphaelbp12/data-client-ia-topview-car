import FeedItem from "../types/FeedItem";
import { ImgMediaCard } from "./ImgMediaCard";
import { Grid } from "@material-ui/core";
import { FC } from "react";

export const SkeletonGrid : FC = () => {
    const itemsMockLoading = Array.apply(null, Array(50)).map(function () {
        return {
            title: '',
            link: '',
            dataTaken: new Date(),
            description: '',
            published: new Date(),
            author: '',
            authorId: '',
            tags: '',
            media: { m: '' },
        } as FeedItem;
    });

    return <>{itemsMockLoading.map((item: FeedItem, index: number) => {
                const prop = {
                    ...item,
                    loading: true,
                }
                return (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ImgMediaCard {...prop} />
                    </Grid>)
            })}</>;
}
