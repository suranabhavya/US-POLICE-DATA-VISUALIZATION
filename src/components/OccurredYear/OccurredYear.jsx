import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import styles from './OccurredYear.module.css';

const Chart = require('chart.js');

var occurred_date = [];
var occurred_year = [];
var uniqueOccurredYear = [];
var intUniqueOccurredYear = [];
var sortedUniqueOccurredYear = [];
var count = [];

const OccurredYear = ({ data, sourceData }) => {

    // dataArray.push(props.data[1]);
    // console.log(dataArray);
    // someData.push(victim_race[1]);
    // console.log(data[0]);
    if (!data[0]) {
        return 'Loading...';
    }

    if (!sourceData[0] || sourceData == 'sources') {
        occurred_date = [];
        occurred_year = [];
        uniqueOccurredYear = [];
        intUniqueOccurredYear = [];
        sortedUniqueOccurredYear = [];
        count = [];

        for (let i = 0; i < data.length; i++) {
            occurred_date.push(data[i].occurred_date)
        }
        console.log(occurred_date.length);

        for (let i = 0; i < occurred_date.length; i++) {
            occurred_year.push(occurred_date[i].split("-")[0])
        }
        console.log(occurred_year)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueOccurredYear = occurred_year.filter(unique);
        const index = uniqueOccurredYear.indexOf("");
        if (index > -1) {
            uniqueOccurredYear.splice(index, 1);
        }

        for (let i = 0; i < uniqueOccurredYear.length; i++) {
            intUniqueOccurredYear.push(parseInt(uniqueOccurredYear[i]))
        }
        console.log(intUniqueOccurredYear);

        intUniqueOccurredYear.sort(function (a, b) {
            return a - b;
        });

        sortedUniqueOccurredYear = intUniqueOccurredYear;

        console.log(sortedUniqueOccurredYear);

        for (let i = 0; i < sortedUniqueOccurredYear.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < occurred_year.length; i++) {
            for (let j = 0; j < sortedUniqueOccurredYear.length; j++) {
                if (occurred_year[i] == sortedUniqueOccurredYear[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);

    }

    else {
        occurred_date = [];
        occurred_year = [];
        uniqueOccurredYear = [];
        intUniqueOccurredYear = [];
        sortedUniqueOccurredYear = [];
        count = [];

        for (let i = 0; i < sourceData.length; i++) {
            occurred_date.push(sourceData[i].occurred_date)
        }
        console.log(occurred_date.length);

        for (let i = 0; i < occurred_date.length; i++) {
            occurred_year.push(occurred_date[i].split("-")[0])
        }
        console.log(occurred_year)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueOccurredYear = occurred_year.filter(unique);
        const index = uniqueOccurredYear.indexOf("");
        if (index > -1) {
            uniqueOccurredYear.splice(index, 1);
        }

        for (let i = 0; i < uniqueOccurredYear.length; i++) {
            intUniqueOccurredYear.push(parseInt(uniqueOccurredYear[i]))
        }
        console.log(intUniqueOccurredYear);

        intUniqueOccurredYear.sort(function (a, b) {
            return a - b;
        });

        sortedUniqueOccurredYear = intUniqueOccurredYear;

        console.log(sortedUniqueOccurredYear);

        for (let i = 0; i < sortedUniqueOccurredYear.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < occurred_year.length; i++) {
            for (let j = 0; j < sortedUniqueOccurredYear.length; j++) {
                if (occurred_year[i] == sortedUniqueOccurredYear[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);

    }

    const LineChart = (
        <Line
            data={{
                labels: sortedUniqueOccurredYear,
                datasets: [
                    {
                        label: "Number of Victim's",
                        fill: "false",
                        data: count,
                        borderColor: 'white',
                    }
                ],
                options: {
                }
            }}
        />
    )

    return (
        <Card xs={12} sm={6} md={3} className={styles.occurredYearCard}>
            <CardContent>
                {LineChart}
            </CardContent>
        </Card>
    )
}

export default OccurredYear;