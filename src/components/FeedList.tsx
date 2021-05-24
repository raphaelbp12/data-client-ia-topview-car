import { FC } from 'react';
import FeedItem from '../types/FeedItem';
import {Grid } from '@material-ui/core';
import { ImgMediaCard } from './ImgMediaCard';

interface FeedListProps {
    list: FeedItem[];
}

export const FeedList: FC<FeedListProps> = props => {
    return (
        <>
            { props.list.map((item: FeedItem, index: number) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <ImgMediaCard {...item} />
                            </Grid>)
                    }) }
        </>
    );
}