import FeedItem from "../types/FeedItem";
import { ImgMediaCard } from "./ImgMediaCard";
import { Grid } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { Chart } from "chart.js";
import React from "react";
import { Scatter } from 'react-chartjs-2';

export const ScatterChart: FC<any> = props => {
    const rand = () => Math.round(Math.random() * 20 - 10);
    const data = {
        datasets: [
            {
                label: 'A dataset',
                data: [
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                ],
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    const [dataToChart, setDataToChart] = useState<any>(data);
    const [dataParsed, setDataParsed] = useState([]);

    useEffect(() => {
        console.log('trackSelected', props.trackSelected);
        let data : any = []
        
        if (!props || !props.data) { setDataParsed([]) };

        props.data[props.trackSelected].forEach((score: any) => {
            data.push({ x: score.Genereation, y: score.Value});
        });

        setDataParsed(data);        
    }, [props.data, props.trackSelected])

    useEffect(() => {
        let tempData = {...data};

        if (dataParsed.length > 0) {
            tempData.datasets[0].data = dataParsed;
            tempData.datasets[0].label = "Track: " + props.trackSelected;
            setDataToChart(tempData);
        }
    }, [dataParsed])

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return <><Scatter height={400} width={1234} type={'scatter'} data={dataToChart} options={options} /></>;
}
