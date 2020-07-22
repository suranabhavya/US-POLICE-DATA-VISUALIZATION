import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import styles from './VictimAge.module.css';

const Chart = require('chart.js');

var victim_age = [];
var intUniqueVictim_age = [];
var uniqueVictim_age = [];
var sortedUniqueVictim_age = [];
var count = [];

const VictimAge = ({ data, sourceData }) => {

    // dataArray.push(props.data[1]);
    // console.log(dataArray);
    // someData.push(victim_race[1]);
    // console.log(data[0]);
    if (!data[0]) {
        return 'Loading...';
    }

    if (!sourceData[0] || sourceData == 'sources') {
        victim_age = [];
        intUniqueVictim_age = [];
        uniqueVictim_age = [];
        sortedUniqueVictim_age = [];
        count = [];

        for (let i = 0; i < data.length; i++) {
            victim_age.push(data[i].victim_age)
        }
        console.log(victim_age)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueVictim_age = victim_age.filter(unique);
        const index = uniqueVictim_age.indexOf("");
        if (index > -1) {
            uniqueVictim_age.splice(index, 1);
        }

        for (let i = 0; i < uniqueVictim_age.length; i++) {
            intUniqueVictim_age.push(parseInt(uniqueVictim_age[i]))
        }
        console.log(intUniqueVictim_age);

        intUniqueVictim_age.sort(function (a, b) {
            return a - b;
        });

        sortedUniqueVictim_age = intUniqueVictim_age;

        console.log(sortedUniqueVictim_age);

        for (let i = 0; i < sortedUniqueVictim_age.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < victim_age.length; i++) {
            for (let j = 0; j < sortedUniqueVictim_age.length; j++) {
                if (victim_age[i] == sortedUniqueVictim_age[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);

    }

    else {
        victim_age = [];
        intUniqueVictim_age = [];
        uniqueVictim_age = [];
        sortedUniqueVictim_age = [];
        count = [];

        for (let i = 0; i < sourceData.length; i++) {
            victim_age.push(sourceData[i].victim_age)
        }
        console.log(victim_age)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueVictim_age = victim_age.filter(unique);
        const index = uniqueVictim_age.indexOf("");
        if (index > -1) {
            uniqueVictim_age.splice(index, 1);
        }

        for (let i = 0; i < uniqueVictim_age.length; i++) {
            intUniqueVictim_age.push(parseInt(uniqueVictim_age[i]))
        }
        console.log(intUniqueVictim_age);

        intUniqueVictim_age.sort(function (a, b) {
            return a - b;
        });

        sortedUniqueVictim_age = intUniqueVictim_age;

        console.log(sortedUniqueVictim_age);

        for (let i = 0; i < sortedUniqueVictim_age.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < victim_age.length; i++) {
            for (let j = 0; j < sortedUniqueVictim_age.length; j++) {
                if (victim_age[i] === uniqueVictim_age[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);
    }

    const LineChart = (
        <Line
            data={{
                labels: sortedUniqueVictim_age,
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
        <Card xs={12} sm={6} md={3} className={styles.victimAgeCard}>
            <CardContent>
                {LineChart}
            </CardContent>
        </Card>
    )
}

export default VictimAge;