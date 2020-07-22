import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import styles from './VictimRace.module.css';

const Chart = require('chart.js');

var victim_race = [];
var uniqueRaces = [];
var count = [];

const VictimRace = ({ data, sourceData }) => {

    // dataArray.push(props.data[1]);
    // console.log(dataArray);
    // someData.push(victim_race[1]);
    // console.log(sourceData);
    // console.log(data[0]);
    if (!data[0]) {
        return 'Loading...';
    }

    if (!sourceData[0] || sourceData == 'sources') {
        victim_race = [];
        uniqueRaces = [];
        count = [];
        console.log(sourceData);
        for (let i = 0; i < data.length; i++) {
            if (data[i].victim_race == 'B') {
                data[i].victim_race = 'BLACK';
            }
            if (data[i].victim_race == 'W') {
                data[i].victim_race = 'WHITE';
            }
            if (data[i].victim_race == 'A') {
                data[i].victim_race = 'ASIAN';
            }
            if (data[i].victim_race == 'I') {
                data[i].victim_race = 'INDIAN';
            }
            if (data[i].victim_race == 'H') {
                data[i].victim_race = 'HISPANIC';
            }
            if (data[i].victim_race == 'U') {
                data[i].victim_race = 'UNKNOWN';
            }
            if (data[i].victim_race == 'O' || data[i].victim_race == 'OTH') {
                data[i].victim_race = 'OTHER';
            }
            victim_race.push(data[i].victim_race)
        }
        console.log(victim_race)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueRaces = victim_race.filter(unique);
        const index = uniqueRaces.indexOf("");
        if (index > -1) {
            uniqueRaces.splice(index, 1);
        }

        console.log(uniqueRaces);

        for (let i = 0; i < uniqueRaces.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < victim_race.length; i++) {
            for (let j = 0; j < uniqueRaces.length; j++) {
                if (victim_race[i] === uniqueRaces[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);

        var colors = [];

        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
        };

        for (let i = 0; i < uniqueRaces.length; i++) {
            colors.push(dynamicColors());
        }
        console.log(colors);
    }

    else {
        victim_race = [];
        uniqueRaces = [];
        count = [];
        console.log(sourceData);
        for (let i = 0; i < sourceData.length; i++) {
            if (sourceData[i].victim_race == 'B') {
                sourceData[i].victim_race = 'BLACK';
            }
            if (sourceData[i].victim_race == 'W') {
                sourceData[i].victim_race = 'WHITE';
            }
            if (sourceData[i].victim_race == 'A') {
                sourceData[i].victim_race = 'ASIAN';
            }
            if (sourceData[i].victim_race == 'I') {
                sourceData[i].victim_race = 'INDIAN';
            }
            if (sourceData[i].victim_race == 'H') {
                sourceData[i].victim_race = 'HISPANIC';
            }
            if (sourceData[i].victim_race == 'U') {
                sourceData[i].victim_race = 'UNKNOWN';
            }
            if (sourceData[i].victim_race == 'O' || sourceData[i].victim_race == 'OTH') {
                sourceData[i].victim_race = 'OTHER';
            }
            victim_race.push(sourceData[i].victim_race)
        }
        console.log(victim_race)

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        uniqueRaces = victim_race.filter(unique);
        const index = uniqueRaces.indexOf("");
        if (index > -1) {
            uniqueRaces.splice(index, 1);
        }

        console.log(uniqueRaces);

        for (let i = 0; i < uniqueRaces.length; i++) {
            count[i] = 0;
        }

        for (let i = 0; i < victim_race.length; i++) {
            for (let j = 0; j < uniqueRaces.length; j++) {
                if (victim_race[i] === uniqueRaces[j]) {
                    count[j]++;
                }
            }
        }

        console.log(count);

        var colors = [];

        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgb(" + r + "," + g + "," + b + ")";
        };

        for (let i = 0; i < uniqueRaces.length; i++) {
            colors.push(dynamicColors());
        }
        console.log(colors);
    }

    const DoughnutChart = (
        <Doughnut
            data={{
                // labels: uniqueRaces,
                labels: uniqueRaces,
                datasets: [
                    {

                        label: "Victim's Race",
                        backgroundColor: colors,
                        data: count
                    }
                ]
            }}
        />
    )

    return (
        <Card xs={12} sm={6} md={3} className={styles.victimRaceCard}>
            <CardContent>
                {DoughnutChart}
            </CardContent>
        </Card>
    )
}

export default VictimRace;